import React, { memo, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './EmailLogin.scss';

function EmailLogin({ handleLogin }) {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <div className="email-login-container">
      <div className="title">
        Login with Email
      </div>
      <div className="form">
          <TextField
            className="field"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          />
          <TextField
            className="field"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          />
          <div className="submit-container">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => handleLogin({ email, password })}
            >
              Login
            </Button>
          </div>
      </div>
    </div>
  );
}

export default memo(EmailLogin);
