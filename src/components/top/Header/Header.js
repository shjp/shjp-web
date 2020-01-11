import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'easy-peasy';

import './Header.scss';

function Header() {
  const me = useStore(state => state.me.me);

  const isAdmin =
    me && (me.groups || []).filter(group => group.permissions.can_admin_group).length > 0;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shjp-bg-primary">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/">Sacred Heart of Jesus Parish</Link>
        </div>
        <div className="nav navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <Link to="/">
              <li className="nav-item active">Home</li>
            </Link>

            <Link to="/groups">
              <li className="nav-item">Groups</li>
            </Link>

            <Link to="/announcements">
              <li className="nav-item">Announcements</li>
            </Link>

            <Link to="/events">
              <li className="nav-item">Upcoming Events</li>
            </Link>
          </ul>
          <ul className="navbar-nav navbar-right">
            {isAdmin && (
              <Link to="/admin">
                <li className="nav-item">Admin</li>
              </Link>
            )}
            {!me && (
              <Link to="/signup">
                <li className="nav-item">Sign Up</li>
              </Link>
            )}
            {me ? (
              <Link to="/logout">
                <li className="nav-item">Logout</li>
              </Link>
            ) : (
              <Link to="/login">
                <li className="nav-item">Login</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default memo(Header);
