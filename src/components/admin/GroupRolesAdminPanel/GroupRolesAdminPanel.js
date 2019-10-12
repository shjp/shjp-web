import React, { memo, useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import GroupRolesAdminPanelRoleCreateModal from './GroupRolesAdminPanelRoleCreateModal';
import GroupRolesAdminPanelRolesTable from './GroupRolesAdminPanelRolesTable';
import './GroupRolesAdminPanel.scss';

function GroupRolesAdminPanel({ groupId, roles }) {
  const [isRoleCreationModalOpen, setRoleCreationModalOpen] = useState(false);

  const createGroupRole = useStoreActions(actions => actions.groups.createGroupRole);

  const _openRoleCreateModal = () => {
    setRoleCreationModalOpen(true);
  };

  return (
    <div className="group-roles-admin-panel">
      <div className="label">Group Roles</div>
      <div className="actions">
        <Button
          className="role-add-button"
          variant="contained"
          color="primary"
          size="small"
          onClick={_openRoleCreateModal}
        >
          <AddIcon />
        </Button>
        <GroupRolesAdminPanelRoleCreateModal
          isOpen={isRoleCreationModalOpen}
          groupId={groupId}
          close={() => setRoleCreationModalOpen(false)}
          onSubmit={createGroupRole}
        />
      </div>
      <GroupRolesAdminPanelRolesTable roles={roles} />
    </div>
  );
}

export default memo(GroupRolesAdminPanel);
