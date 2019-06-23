import React, { memo } from 'react';
import ErrorIcon from '@material-ui/icons/Error';

import './PermissionDeniedPage.scss';

function PermissionDeniedPage() {
  return (
    <div className="permission-denied-page">
      <div className="icon-container">
        <ErrorIcon />
      </div>
      <div className="instruction">
        You are not authorized to perform this action.
      </div>
    </div>
  );
}

export default memo(PermissionDeniedPage);
