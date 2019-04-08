import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
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
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};
