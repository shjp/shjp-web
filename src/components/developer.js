import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/developer.css';

const muzi = require('../images/muzi.gif');
const ryan = require('../images/ryan.gif');
const apeach = require('../images/apeach.gif');

class Developer extends Component {

    render() {
        return(
            <div className="container section-ourTeam" id="dev_body">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 ourTeam-heading text-center">
                        <h1>Meet Our Developers</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="row section-success ourTeam-box text-center">
                            <div className="col-md-12 section1">
                                <img src={muzi} />
                            </div>
                            <div className="col-md-12 section2">
                                <p>Paolo Chang</p><br />
                                <h1>iOS Developer</h1><br />
                            </div>
                            <div className="col-md-12 section3">
                                <p>
                                    Paolo is responsible for iOS Mobile Application of SHJP. He recently finished his
                                    co-op at Woodbine Entertainment as .NET Developer, and he will be graduated in Dec.2018
                                    at Seneca College for Computer Programming program.
                                </p>
                            </div>
                            <div className="col-md-12 section4">
                                <a href="https://www.facebook.com/paolo.chanhwan.chang" className="fa fa-facebook-official" aria-hidden="true"></a>
                                <a href="https://www.instagram.com/j.paolo/" className="fa fa-instagram" aria-hidden="true"></a>
                                <a href="mailto:chanhwan.chang@gmail.com" className="fa fa-envelope" aria-hidden="true"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="row section-info ourTeam-box text-center">
                            <div className="col-md-12 section1">
                                <img src={ryan} />
                            </div>
                            <div className="col-md-12 section2">
                                <p>Sangkon Lee</p><br />
                                <h1>Android Developer</h1><br />
                            </div>
                            <div className="col-md-12 section3">
                                <p>
                                    As known as God Sangkon, he is the mentor of this team and has trendmous
                                    experiences on programming including Phthon, React, Java, Go, etc.
                                    He now works at Uncharted Software in downtown Toronto as Software Engineer.
                                </p>
                            </div>
                            <div className="col-md-12 section4">
                                <a href="//www.facebook.com/sangkon.lee.1422" className="fa fa-facebook-official" aria-hidden="true"></a>
                                <a href="https://www.instagram.com/?hl=en" className="fa fa-instagram" aria-hidden="true"></a>
                                <a href="mailto:lee.sg16@gmail.com" className="fa fa-envelope" aria-hidden="true"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="row section-danger ourTeam-box text-center">
                            <div className="col-md-12 section1">
                                <img src={apeach} />
                            </div>
                            <div className="col-md-12 section2">
                                <p>Eddie Kim</p><br />
                                <h1>Web Developer</h1><br />
                            </div>
                            <div className="col-md-12 section3">
                                <p>
                                    Eddie recently graduated from Sheridan College for Software Development and Network
                                    Engineering program and has working experience for Web Developer from Pinnaca
                                    and Mobile Application Developer from NYGH.
                                </p>
                            </div>
                            <div className="col-md-12 section4">

                                <a href="https://www.facebook.com/jungyup.kim.92" className="fa fa-facebook-official" aria-hidden="true"></a>
                                <a href="https://www.instagram.com/spicynwolf/" className="fa fa-instagram" aria-hidden="true"></a>
                                <a href="mailto:spicynwolf@gmail.com" className="fa fa-envelope" aria-hidden="true"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Developer;