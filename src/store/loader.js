import { thunk } from 'easy-peasy';
import cache from 'cache';

export default {
  // thunks
  loadUserSession: thunk(async (actions, query, { dispatch }) => {
    const accessToken = cache.get(cache.ACCESS_TOKEN_KEY);
    if (accessToken) {
      dispatch.me.storeAccessToken(accessToken);
      dispatch.me.getMyProfile();
    }
  }),
};
