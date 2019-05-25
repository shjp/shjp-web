import { action,  thunk } from 'easy-peasy';
import client from 'api/client';

export default {
  // store
  error: null,
  key: null,

  // actions
  storeLoginKey: action((state, key) => {
    state.key = key;
  }),

  // thunks
  emailLogin: thunk(async (actions, query) => {
    const [ data ] = await client.mutate(query);
    actions.storeLoginKey(data.login.key);
  }),
};
