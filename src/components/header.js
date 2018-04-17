import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../style/header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Sacred Heart of Jesus Parish</a>
                    </div>
                    <div className="nav navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><Link to="/">Home</Link></li>
                        <li className="nav-item dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">About<span className="caret"></span></a>
                            <ul className="dropdown-menu" id="dropdown">
                                <li><a href="#YA">Young Adults</a></li>
                                <li><a href="#choir">Choir</a></li>
                                <li><a href="#liturgy">Liturgy</a></li>
                                <li><a href="#legio>">Marie Legio</a></li>
                            </ul>
                        </li>
                        <li className="nav-item"><a href="#">Announcement</a></li>
                        <li className="nav-item"><a href="#">Upcoming Events</a></li>
                    </ul>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;