import React, { memo, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import GroupMembershipAdminPanel from 'components/admin/GroupMembershipAdminPanel';
import GroupRolesAdminPanel from 'components/admin/GroupRolesAdminPanel';
import './GroupAdminPanel.scss';

function GroupAdminPanel({ group }) {
  const groupDetails = useStoreState(state => state.groups.group);
  const getGroupDetails = useStoreActions(actions => actions.groups.getGroupDetails);

  useEffect(() => {
    getGroupDetails(group.id);
  }, []);

  if (!groupDetails) {
    return null;
  }

  return (
    <div className="group-admin-panel">
      <GroupMembershipAdminPanel group={groupDetails} />
      <GroupRolesAdminPanel groupId={group.id} roles={groupDetails.roles || []} />
    </div>
  );
}

export default memo(GroupAdminPanel);
