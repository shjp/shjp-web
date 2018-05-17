import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/home.css';

const image = require('../images/1419471441169.jpeg');
console.log(image);

class Home extends Component {

    render() {
        return(
            <div className="container">
                <h2>Welcome to SHJP YA Site</h2>
                <img src={image} />
            </div>
        );
    }
}

export default Home;