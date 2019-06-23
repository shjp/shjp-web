import React, { memo, useEffect } from 'react';
import { useStore } from 'easy-peasy';
import EmailLogin from 'components/login/EmailLogin';

import './LoginPage.scss';

function LoginPage({ history }) {

  const me = useStore(state => state.me.me);

  const _goToProfile = () => {
    history.push(`/profile`);
  }

  useEffect(() => {
    if (me) {
      _goToProfile();
      return;
    }
  }, []);

  return (
    <div className="login-page">
      <EmailLogin
        onLogin={_goToProfile}
      />
    </div>
  );
}

export default memo(LoginPage);
