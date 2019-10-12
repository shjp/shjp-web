import React, { memo, useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import './GroupMembershipAdminPanelCard.scss';

function GroupMembershipAdminPanelCard({ user, roles, onApprove, onDecline }) {
  if (roles.length === 0) {
    return <div>Roles not available to assign to this user</div>;
  }

  const [selectedRole, selectRole] = useState(roles[0]);

  const _handleApprove = () => onApprove(user.id, selectedRole.id);
  const _handleDecline = () => onDecline(user.id, selectedRole.id);

  return (
    <Paper className="group-membership-admin-panel-card" elevation={0}>
      <div className="col">
        <div className="message">
          <span className="name">{user.name} </span> requested to join the group
        </div>
      </div>
      <div className="col role-selector">
        <InputLabel
          shrink
          margin="dense"
          htmlFor="role-label-placeholder"
          style={{ marginBottom: 0 }}
        >
          Role
        </InputLabel>
        <Select
          displayEmpty
          value={selectedRole}
          renderValue={value => <div>{value.name}</div>}
          inputProps={{ id: 'role-label-placeholder' }}
          onChange={event => selectRole(event.target.value)}
        >
          {roles.map((role, index) => (
            <MenuItem key={role.id + '' + index} value={role}>
              {role.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="col button-container">
        <Button variant="contained" color="primary" size="small" onClick={_handleApprove}>
          Approve
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={_handleDecline}>
          Decline
        </Button>
      </div>
    </Paper>
  );
}

export default memo(GroupMembershipAdminPanelCard);
