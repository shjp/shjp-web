import { action } from 'easy-peasy';

export default {
  // store
  snackbar: {
    open: false,
    message: '',
    autoHideDuration: 5000,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    variant: 'info', // ['success', 'error', 'warning', 'info']
  },

  // actions
  showSnackbar: action((state, snackbarOptions) => {
    state.snackbar = {
      ...state.snackbar,
      ...snackbarOptions,
      open: true,
    };
  }),
  hideSnackbar: action((state) => {
    state.snackbar = {
      ...state.snackbar,
      open: false,
    };
  }),
};
