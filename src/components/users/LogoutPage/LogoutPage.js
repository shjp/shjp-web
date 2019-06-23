import React, { memo, useEffect } from 'react';

import { useActions } from 'easy-peasy';

import './LogoutPage.scss';

function LogoutPage() {

  const clearMe = useActions(actions => actions.me.clearMe);

  useEffect(() => {
    clearMe()
  });

  return (
    <div className="logout-page">
      <div className="text">
        You have been logged out
      </div>
    </div>
  )
}

export default memo(LogoutPage);
