import { action, thunk } from 'easy-peasy';
import client from 'api/client';

export default {
  // store
  groups: [],

  // actions
  handleGetGroups: action((state, { groups }) => {
    state.groups = groups;
  }),

  // thunks
  getGroups: thunk(async (actions, query) => {
    const [ data ] = await client.query(query);
    actions.handleGetGroups(data);
  }),
};
