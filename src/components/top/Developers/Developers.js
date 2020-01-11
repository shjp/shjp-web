import React from 'react';

import './Developers.scss';

const muzi = require('assets/muzi.gif');
const ryan = require('assets/ryan.gif');
const apeach = require('assets/apeach.gif');

export default function Developers() {
  return (
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
              <img src={muzi} alt="paolo chang" />
            </div>
            <div className="col-md-12 section2">
              <p>Paolo Chang</p>
              <br />
              <h1>iOS Developer</h1>
              <br />
            </div>
            <div className="col-md-12 section3">
              <p>Paolo did nothing.</p>
            </div>
            <div className="col-md-12 section4">
              <a href="https://www.facebook.com/paolo.chanhwan.chang" aria-hidden="true">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="https://www.instagram.com/j.paolo/" aria-hidden="true">
                <i className="fa fa-instagram" />
              </a>
              <a href="mailto:chanhwan.chang@gmail.com" aria-hidden="true">
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="row section-info ourTeam-box text-center">
            <div className="col-md-12 section1">
              <img src={ryan} alt="sang-gon lee" />
            </div>
            <div className="col-md-12 section2">
              <p>Sang-gon Lee</p>
              <br />
              <h1>Lead Developer</h1>
              <br />
            </div>
            <div className="col-md-12 section3">
              <p>Sang-gon did most of the stuffs. Sorry there's no other way to put it.</p>
            </div>
            <div className="col-md-12 section4">
              <a href="//www.facebook.com/sangkon.lee.1422" aria-hidden="true">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="https://www.instagram.com/?hl=en" aria-hidden="true">
                <i className="fa fa-instagram" />
              </a>
              <a href="mailto:lee.sg16@gmail.com" aria-hidden="true">
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="row section-danger ourTeam-box text-center">
            <div className="col-md-12 section1">
              <img src={apeach} alt="eddie kim" />
            </div>
            <div className="col-md-12 section2">
              <p>Eddie Kim</p>
              <br />
              <h1>Web Developer</h1>
              <br />
            </div>
            <div className="col-md-12 section3">
              <p>
                Eddie recently graduated from Sheridan College for Software Development and Network
                Engineering program. He is currently a consultant at Capco. He worked on setting up
                the inital code for this web application.
              </p>
            </div>
            <div className="col-md-12 section4">
              <a href="https://www.facebook.com/jungyup.kim.92" aria-hidden="true">
                <i className="fa fa-facebook-official" />
              </a>
              <a href="https://www.instagram.com/spicynwolf/" aria-hidden="true">
                <i className="fa fa-instagram" />
              </a>
              <a href="mailto:spicynwolf@gmail.com" aria-hidden="true">
                <i className="fa fa-envelope" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
