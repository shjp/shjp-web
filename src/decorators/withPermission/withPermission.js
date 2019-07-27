import React from 'react';
import { useStore } from 'easy-peasy';
import withLogin from 'decorators/withLogin';
import PermissionDeniedPage from './PermissionDeniedPage';

function withPermission(...permissions) {
  return Component => props => {

    if (!permissions.length) {
      console.error('withPermission decorator requires at least one permission');
      return null;
    }

    const WrappedComponent = withLogin(Component);

    const me = useStore(state => state.me.me);

    if (!me) {
      return <WrappedComponent {...props}/>;
    }

    const groupsWithPermissions = (me.groups || [])
      .filter(group => permissions
        .filter(perm => (group.permissions || {})[perm]).length > 0);

    return groupsWithPermissions.length > 0
      ? <WrappedComponent {...props}/>
      : <PermissionDeniedPage/>;
  }
}

export default withPermission;