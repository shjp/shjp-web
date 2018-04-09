import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/footer.css';

const logo = require('../images/shjp-web.png');

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {

        return(
                <footer className="footer-bs col-md-12">
                    <div className="row">
                        <div className="col-md-3 footer-brand animated fadeInLeft">
                            <img src={logo} height="95" width="250" />
                            <p>Sacred Heart of Jesus Parish</p>
                            <p>© 2018 SHJP, All rights reserved</p>
                        </div>
                        <div className="col-md-6 footer-nav animated fadeInUp">
                            <h4>Menu -</h4>
                            <div className="row">
                            <div className="col-md-6">
                                <ul className="pages">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Announcement</a></li>
                                    <li><a href="#">Upcoming Events</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Developers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list">
                                    <li><a href="#">Main SHJP Website</a></li>
                                    <li><a href="#">Daily Missa Website</a></li>
                                    <li><a href="#">GitHub</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-3 footer-soc animated fadeInUp">
                            <h4>Follow Us</h4>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
        );
    }
}

export default Footer;