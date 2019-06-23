import React, { memo } from 'react';
import Button from '@material-ui/core/Button';

import './LoginRedirectPage.scss';

function LoginRedirectPage({ goToLoginPage }) {
  return (
    <div className="login-redirect-page">
      <div className="instruction">
        You are not logged in. Please log in first.
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => goToLoginPage()}
      >
        Go to Login Page
      </Button>
    </div>
  )
}

export default memo(LoginRedirectPage);
