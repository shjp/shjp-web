import React, { memo, useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';
import Snackbar from 'components/common/Snackbar';

function GlobalListenerContainer() {

  const snackbarOptions = useStore(state => state.ui.snackbar);

  const loadUserSession = useActions(actions => actions.loader.loadUserSession);
  const closeSnackbar = useActions(actions => actions.ui.hideSnackbar);

  useEffect(() => {
    loadUserSession();
  }, []);

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
