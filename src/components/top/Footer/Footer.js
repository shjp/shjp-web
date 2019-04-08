import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const logo = require('assets/shjp-web.png');

export default function Footer() {
    return(
        <footer className="footer-bs col-md-12">
            <div className="row">
                <div className="col-md-3 footer-brand animated fadeInLeft">
                    <img src={logo} alt="logo" height="95" width="250" />
                    <p>Sacred Heart of Jesus Parish</p>
                    <p>© 2018 SHJP, All rights reserved</p>
                </div>
                <div className="col-md-6 footer-nav animated fadeInUp">
                    <h4>Menu -</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="pages">
                                <li><Link to="/developers">Developers</Link></li>
                            </ul>
                        </div>
                    <div className="col-md-6">
                        <ul className="list">
                            <li><a href="http://shjparish.ca/" target="_blank" rel="noopener noreferrer">Main SHJP Website</a></li>
                            <li><a href="http://maria.catholic.or.kr/mi_pr/missa/missa.asp" target="_blank" rel="noopener noreferrer">Daily Missa Website</a></li>
                            <li><a href="https://github.com/shjp" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 footer-soc animated fadeInUp">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com/groups/267600486622080/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
