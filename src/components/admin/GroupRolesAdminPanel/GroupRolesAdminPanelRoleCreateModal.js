import React, { memo, useState } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import useFormValidation, { FORM_VALIDATION_TYPE } from 'components/hooks/useFormValidation';
import { permission, permissionLabels } from 'enums/permission';
import './GroupRolesAdminPanelRoleCreateModal.scss';

function GroupRolesAdminPanelRoleCreateModal({ isOpen, close, onSubmit }) {

  const permissionKeys = Object.values(permission);
  const defaultPermissions = permissionKeys.reduce((accum, key) => ({
    ...accum,
    [key]: false
  }), {});

  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState(defaultPermissions);
  const [errors, checkErrors] = useFormValidation([
    {
      key: 'roleName',
      label: 'Role Name',
      types: [
        FORM_VALIDATION_TYPE.NON_EMPTY,
      ],
    },
  ]);

  const _handleClose = () => {
  };

  const _validate = () => checkErrors({
    roleName,
  });

  const _submit = () => {
    if (_validate()) {
      onSubmit({
        name: roleName,
        ...permissions,
      });
    }
  };



  const _setPermission = permKey => evt => {
    setPermissions({
      ...permissions,
      [permKey]: evt.target.value,
    });
  };

  return (
    <Dialog
      className="group-roles-admin-panel-role-create-modal"
      open={isOpen}
      onClose={_handleClose}>
      <DialogTitle id="role-create-dialog-title">Add a new role</DialogTitle>
      <DialogContent>
        <TextField
          label="Role name"
          value={roleName}
          error={!!errors.roleName}
          helperText={errors.roleName}
          onChange={evt => setRoleName(evt.target.value)}
        />
        <div className="permissions-form">
          {permissionKeys.map(key => (
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    key={key}
                    checked={permissions[key]}
                    onChange={_setPermission(key)}
                  />
                }
                label={permissionLabels[key]}
              />
            </div>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Cancel
        </Button>
        <Button onClick={_submit} color="primary" variant='contained'>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default memo(GroupRolesAdminPanelRoleCreateModal);
