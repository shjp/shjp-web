import React, { memo } from 'react';
import { useActions } from 'easy-peasy';
import gql from 'api/gql';
import EmailLogin from './EmailLogin';

function EmailLoginContainer() {

  const emailLogin = useActions(actions => actions.me.emailLogin);
  const showSnackbar = useActions(actions => actions.ui.showSnackbar);

  const _handleLogin = ({ email, password }) => {
    emailLogin(gql`
      login(
        accountType: "email",
        email: ${email},
        password: ${password}
      ) {
        key
      }
    `);
    showSnackbar({ message: 'Login successful', variant: 'success' });
  };

  return (
    <EmailLogin
      handleLogin={_handleLogin}
    />
  );
}

export default memo(EmailLoginContainer);
