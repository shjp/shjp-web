import React, { memo } from 'react';
import EventPageActions from 'components/events/EventPageActions';

import './EventPage.scss';

function EventPage({ history, match }) {
  return (
    <div className="event-page">
      <EventPageActions
        onCreateButtonClicked={() => history.push(`${match.url}/create`)}/>
    </div>
  );
}

export default memo(EventPage);
