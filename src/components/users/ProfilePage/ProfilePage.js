import React, { memo } from 'react';
import { useStore } from 'easy-peasy';
import { decorate, withLogin } from 'decorators';

import './ProfilePage.scss';

function ProfilePage() {

  const me = useStore(state => state.me.me);

  return (
    <div className="profile-page">
      <div className="title">
        Profile
      </div>
      <div className="name">
        { me.name }
      </div>
    </div>
  )
}

export default decorate(
  memo,
  withLogin
)(ProfilePage);
