import React, { memo } from 'react';
import Button from '@material-ui/core/Button';

import './GroupPageActions.scss';

function GroupPageActions({ onCreateButtonClicked }) {
  return (
    <div className="group-page-actions">
      <Button variant="contained" color="primary" size="medium" onClick={onCreateButtonClicked}>
        Create Group
      </Button>
    </div>
  );
}

export default memo(GroupPageActions);
