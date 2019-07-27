import { action, selector, thunk } from 'easy-peasy';
import client from 'api/client';
import gql from 'api/gql';
import cache from 'cache';

export default {
  // store
  error: null,
  accessToken: null,
  me: null,

  // selectors
  groupsWithPermission: selector(
    [state => state.me || {}],
    ([me], [permission]) => (me.groups || []).filter(group => group.permissions[permission])
  ),

  // actions
  storeMyProfile: action((state, me) => {
    state.me = me;
  }),
  storeAccessToken: action((state, key) => {
    state.accessToken = key;
  }),
  clearMe: action((state) => {
    state.me = null;
    state.accessToken = null;
  }),
  setError: action((state, err) => {
    state.error = err;
  }),

  // thunks
  getMyProfile: thunk(async (actions, query, { dispatch, getState }) => {
    const { accessToken } = getState();
    const [ data, err ] = await client.query(query || gql`
      me {
        id
        name
        accountType
        baptismal_name
        birthday
        email
        feastday
        groups {
          id
          name
          privilege
          role_name
          status
          permissions {
            can_read
            can_read_members
            can_read_comments
            can_write_comments
            can_write_announcements
            can_write_events
            can_admin_group
            can_edit_users
          }
        }
      }
    `, accessToken);
    if (err || !data || !data.me) {
      console.error('Error fetching profile, err = ', err, ', data = ', data);
      dispatch.ui.showSnackbar({ variant: 'error', message: 'Error fetching profile' });
      actions.setError('Error fetching profile');
      return;
    }
    actions.storeMyProfile(data.me);
    actions.setError(null);
  }),
  emailLogin: thunk(async (actions, query, { dispatch }) => {
    const [ data, err ] = await client.mutate(query);
    if (err || !data || !data.login) {
      dispatch.ui.showSnackbar({ variant: 'error', message: 'Login Failed' });
      return;
    }
    actions.storeAccessToken(data.login.key);
    cache.set(cache.ACCESS_TOKEN_KEY, data.login.key);
    dispatch.ui.showSnackbar({ variant: 'success', message: 'Login Successful' });
  }),
  logout: thunk(async (actions, query, { dispatch }) => {
    // TODO: Actually bust the user session on server
    actions.clearMe();
    cache.remove(cache.ACCESS_TOKEN_KEY);
  })
};
