import React, { memo } from 'react';
import { useActions, useStore } from 'easy-peasy';
import Snackbar from 'components/common/Snackbar';

function GlobalListenerContainer() {

  const snackbarOptions = useStore(state => state.ui.snackbar);
  const closeSnackbar = useActions(actions => actions.ui.hideSnackbar);

  return (
    <>
      <Snackbar
        onClose={closeSnackbar}
        {...snackbarOptions}
      />
    </>
  );
}

export default memo(GlobalListenerContainer);
