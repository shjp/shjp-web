import { client } from 'api/graphql';
import {
  GET_GROUPS
} from 'store/actionTypes';

export const getGroups = (query) => {
  return async dispatch => {
    try {
      const { data: { data } } = await client.query(query);

      dispatch({
        type: GET_GROUPS,
        groups: data.groups,
      });
    } catch(e) {
      console.warn('Failed to get groups: ', e);
      dispatch({
        type: GET_GROUPS,
        groups: [],
      });
    }
  }
};
