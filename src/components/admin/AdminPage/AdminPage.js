import React, { memo, useState } from 'react';
import { useStoreState } from 'easy-peasy';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import GroupAdminPanel from 'components/admin/GroupAdminPanel';
import { decorate, withPermission } from 'decorators';
import { permission } from 'enums/permission';
import './AdminPage.scss';

function AdminPage() {
  const groupsAsAdmin = useStoreState(
    state => state.me.groupsWithPermission(permission.ADMIN_GROUP),
    [permission.ADMIN_GROUP]
  );

  const [currentTab, setCurrentTab] = useState(0);

  console.log('groupsAsAdmin = ', groupsAsAdmin);

  if (groupsAsAdmin.length < 1) {
    return (
      <div className="admin-page">
        <div className="title">Admin Panel</div>
        <div>You are not authorized to administer any groups.</div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="title">Admin Panel</div>
      <div className="content">
        <Paper>
          <Tabs
            value={currentTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(evt, val) => setCurrentTab(val)}
          >
            {groupsAsAdmin.map((group, index) => (
              <Tab key={index} label={group.name} />
            ))}
          </Tabs>
          <GroupAdminPanel group={groupsAsAdmin[currentTab]} />
        </Paper>
      </div>
    </div>
  );
}

export default decorate(memo, withPermission(permission.ADMIN_GROUP))(AdminPage);
