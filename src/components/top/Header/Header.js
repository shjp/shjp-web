import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'easy-peasy';

import './Header.scss';

function Header() {

    const me = useStore(state => state.me.me);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shjp-bg-primary">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/">Sacred Heart of Jesus Parish</Link>
                </div>
                <div className="nav navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/groups">Groups</Link></li>
                    <li className="nav-item"><Link to="/announcements">Announcements</Link></li>
                    <li className="nav-item"><Link to="/events">Upcoming Events</Link></li>
                </ul>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    {
                        !me && (
                            <li><Link to="/signup">Sign Up</Link></li>
                        )
                    }
                    {
                        me
                        ? <li><Link to="/logout">Logout</Link></li>
                        : <li><Link to="/login">Login</Link></li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default memo(Header);
