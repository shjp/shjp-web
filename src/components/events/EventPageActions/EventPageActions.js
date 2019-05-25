import React, { memo } from 'react';
import Button from '@material-ui/core/Button';

import './EventPageActions.scss';

function EventPageActions({ onCreateButtonClicked }) {
  return (
    <div className="event-page-actions">
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={onCreateButtonClicked}
      >
        Create Event
      </Button>
    </div>
  );
}

export default memo(EventPageActions);
