import React, { memo } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';

import { permission, permissionLabels } from 'enums/permission';
import './GroupRolesAdminPanelRolesTable.scss';

function GroupRolesAdminPanelRolesTable({ roles }) {

  const permissionKeys = Object.values(permission);

  return (
    <Table className="group-roles-admin-panel-roles-table" size='medium'>
      <TableHead>
        <TableRow>
          <TableCell>Role</TableCell>
          {permissionKeys.map(key => (
            <TableCell key={key} align="right">{permissionLabels[key]}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {roles.map(role => (
          <TableRow key={role.name}>
            <TableCell component="th" scope="row">
              {role.name}
            </TableCell>
            {permissionKeys.map(key => (
              <TableCell key={key} align="right">
                {role.permissions[key] && (
                  <CheckIcon/>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default memo(GroupRolesAdminPanelRolesTable);
