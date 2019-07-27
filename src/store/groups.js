import { action, thunk } from 'easy-peasy';
import client from 'api/client';

export default {
  // store
  group: null,
  groups: [],

  // actions
  handleGetGroupDetails: action((state, { group = {} }) => {
    state.group = group;
  }),

  handleGetGroups: action((state, { groups = [] }) => {
    state.groups = groups;
  }),

  // thunks
  getGroupDetails: thunk(async (actions, query, { dispatch }) => {
    const [ data, err ] = await client.query(query);
    if (err) {
      dispatch.ui.showSnackbar({ variant: 'error', message: 'Error fetching group details: ' + err });
      actions.handleGetGroupDetails({});
      return;
    }
    actions.handleGetGroupDetails(data);
  }),

  getGroups: thunk(async (actions, query, { dispatch }) => {
    const [ data, err ] = await client.query(query);
    if (err) {
      dispatch.ui.showSnackbar({ variant: 'error', message: 'Error fetching groups: ' + err });
      actions.handleGetGroups({});
      return;
    }
    actions.handleGetGroups(data);
  }),
};
