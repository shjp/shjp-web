import React, { useEffect } from 'react';
import { useActions, useStore } from 'easy-peasy';
import LoginRedirectPage from './LoginRedirectPage';

export default function withLogin(Component) {
  return function (props) {

    if (!props.history) {
      console.error('Component must be registered as a route in order to be decorated with withLogin');
      return null;
    }

    const me = useStore(state => state.me.me);
    const accessToken = useStore(state => state.me.accessToken);
    const sessionError = useStore(state => state.me.error);

    const getMyProfile = useActions(actions => actions.me.getMyProfile);

    const _goToLoginPage = () => {
      props.history.push('/login');
      return;
    };

    console.log('me = ', me, ', accessToken = ', accessToken, ', sessionError =', sessionError);
    if (me) {
      return <Component {...props}/>;
    }

    if (accessToken) {
      getMyProfile();
      return null;
    }

    return <LoginRedirectPage goToLoginPage={_goToLoginPage}/>;
  }
}
