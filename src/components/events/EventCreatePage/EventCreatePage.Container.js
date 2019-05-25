import React, { memo } from 'react';
import { useActions } from 'easy-peasy';
import gql from 'api/gql';
import EventCreatePage from './EventCreatePage';

function EventCreatePageContainer({ history }) {

  const submitEventCreate = useActions(actions => actions.events.createEvent);

  const _onEventCreateSubmit = async event => {

    // TODO: Hook up with the current user
    const err = await submitEventCreate(gql`
      createEvent(
        name: ${event.name}
        start: ${event.startDate}
        end: ${event.endDate}
        allow_maybe: ${event.allowMaybe}
        description: ${event.description}
        location: ${event.location}
        location_description: ${event.locationDescription}
        authorId: "d0421417-806a-4a96-a8fc-f5dded5ff254"
      ) {
        ref_id
      }
    `);
    if (!err) {
      history.push('/events');
    }
  };

  return (
    <EventCreatePage
      onSubmit={_onEventCreateSubmit}
    />
  );
}

export default memo(EventCreatePageContainer);