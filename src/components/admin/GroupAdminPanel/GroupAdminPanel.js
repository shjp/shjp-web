import React, { memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import gql from 'api/gql';
import GroupMembershipAdminPanel from 'components/admin/GroupMembershipAdminPanel';
import GroupRolesAdminPanel from 'components/admin/GroupRolesAdminPanel';
import './GroupAdminPanel.scss';

function GroupAdminPanel({ group }) {

  const groupDetails = useStoreState(state => state.groups.group);
  const getGroupDetails = useStoreActions(actions => actions.groups.getGroupDetails);

  useEffect(() => {
    getGroupDetails(gql`
      group(id: ${group.id}) {
        name
        description
        image_url
        members {
          id
          name
          role_name
          status
        }
        roles {
          id
          name
          permissions {
            can_read
            can_read_members
            can_read_comments
            can_write_comments
            can_write_announcements
            can_write_events
            can_admin_group
            can_edit_users
          }
        }
      }
    `);
  }, []);

  if (!groupDetails) {
    return null;
  }

  const { members = [], roles = [] } = groupDetails;
  const pendingMembers = members.filter(member => member.status === 'pending');
  console.log('[SG] members = ', members);
  console.log('[SG] roles = ', roles);

  return (
    <div className="group-admin-panel">
      <GroupMembershipAdminPanel
        pendingMembers={pendingMembers}
      />
      <GroupRolesAdminPanel
        roles={roles}
      />
    </div>
  )
}

export default memo(GroupAdminPanel);
