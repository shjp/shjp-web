import React, { memo } from 'react';

import GroupMembershipAdminPanelCard from './GroupMembershipAdminPanelCard';
import './GroupMembershipAdminPanel.scss';

function GroupMembershipAdminPanel({ pendingMembers }) {
  return (
    <div className="group-membership-admin-panel">
      <div className="label">
        Pending Approvals
      </div>
      {pendingMembers.map(member => (
        <GroupMembershipAdminPanelCard
          key={member.name}
          user={member}
        />
      ))}
    </div>
  )
}

export default memo(GroupMembershipAdminPanel);
