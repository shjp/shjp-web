import React, { memo } from 'react';
import { useActions } from 'easy-peasy';
import gql from 'api/gql';
import EmailLogin from './EmailLogin';

function EmailLoginContainer({ onLogin }) {

  const emailLogin = useActions(actions => actions.me.emailLogin);

  const _handleLogin = async ({ email, password }) => {
    await emailLogin(gql`
      login(
        accountType: "email",
        email: ${email},
        password: ${password}
      ) {
        key
      }
    `);
    onLogin();
  };

  return (
    <EmailLogin
      handleLogin={_handleLogin}
    />
  );
}

export default memo(EmailLoginContainer);
