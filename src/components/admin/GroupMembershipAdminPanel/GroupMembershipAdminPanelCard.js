import React, { memo, useState } from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';

import './GroupMembershipAdminPanelCard.scss';

function GroupMembershipAdminPanelCard({ user }) {

  //const [selectedRole, selectRole] = useState();
  const roles = ['foo'];

  return (
    <Paper className="group-membership-admin-panel-card" elevation={0}>
      <div className="col">
        <div className="message">
          <span className="name">{ user.name } </span> requested to join the group
        </div>
      </div>
      <div className="col role-selector">
        <Select
          value={'foo'}
          onChange={() => {}}
        >
          <MenuItem value={'foo'}>Foo</MenuItem>
        </Select>
      </div>
      <div className="col button-container">
        <Button
          variant="contained"
          color="primary"
          size="small">
          Approve
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small">
          Decline
        </Button>
      </div>
    </Paper>
  )
}

export default memo(GroupMembershipAdminPanelCard);
