import { action, thunk } from 'easy-peasy';
import client from 'api/graphql';
import gql from 'api/gql';

export default {
  // store
  massFiles: [],

  // actions
  handleGetMassFiles: action((state, { massFiles = [] }) => {
    state.massFiles = massFiles;
  }),

  // thunks
  getMassFiles: thunk(async (actions, query, { dispatch }) => {
    const [data, err] = await client.query(gql`
        massFiles {
            id
            type
            name
            date
            url
        }
    `);
    if (err) {
      dispatch.ui.showSnackbar({
        variant: 'error',
        message: 'Error fetching mass files: ' + err,
      });
      actions.handleGetMassFiles({});
      return;
    }
    actions.handleGetMassFiles(data);
  }),
};
