import React, { memo } from 'react';
import EmailLogin from 'components/login/EmailLogin';

import './LoginPage.scss';

function LoginPage() {
  return (
    <div className="login-page">
      <EmailLogin/>
    </div>
  );
}

export default memo(LoginPage);
