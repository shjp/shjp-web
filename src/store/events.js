import { action, thunk } from 'easy-peasy';
import client from 'api/graphql';

export default {
  // store
  events: [],
  ref: null,

  // actions
  handleCreateEvent: action((state, payload) => {
    state.ref = payload.ref_id;
  }),

  // thunks
  createEvent: thunk(async (actions, query, { dispatch }) => {
    const [data, err] = await client.mutate(query);
    if (err) {
      console.error('[events.createEvent] error from server: ', err);
      dispatch.ui.showSnackbar({
        variant: 'error',
        message: 'Event failed to be submitted for creation',
      });
      return err;
    }
    actions.handleCreateEvent(data);
    dispatch.ui.showSnackbar({ variant: 'success', message: 'Event submitted for creation' });
  }),
};
