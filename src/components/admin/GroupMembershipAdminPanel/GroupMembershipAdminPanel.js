import React, { memo } from 'react';
import { useStoreActions } from 'easy-peasy';

import GroupMembershipAdminPanelCard from './GroupMembershipAdminPanelCard';
import './GroupMembershipAdminPanel.scss';

function GroupMembershipAdminPanel({ group }) {
  const { members = [], roles = [] } = group;

  const changeGroupMemberStatus = useStoreActions(
    actions => actions.groups.changeGroupMemberStatus
  );

  const _handleChangeGroupMemberStatus = status => (userId, roleId) => {
    changeGroupMemberStatus({
      status,
      userId,
      roleId,
      groupId: group.id,
    });
  };

  const pendingMembers = members.filter(member => member.status === 'pending');

  return (
    <div className="group-membership-admin-panel">
      <div className="label">Pending Approvals</div>
      {!pendingMembers.length && <div>There are currently no pending member requests.</div>}
      {pendingMembers.map(member => (
        <GroupMembershipAdminPanelCard
          key={member.name}
          user={member}
          roles={roles}
          onApprove={_handleChangeGroupMemberStatus('accepted')}
          onDecline={_handleChangeGroupMemberStatus('declined')}
        />
      ))}
    </div>
  );
}

export default memo(GroupMembershipAdminPanel);
