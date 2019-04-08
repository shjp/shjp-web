import React from 'react';

import './Home.scss';

const image = require('assets/1419471441169.jpeg');

export default function Home() {
    return(
        <div className="container">
            <h2>Welcome to SHJP YA Site</h2>
            <img src={image} alt="main" />
        </div>
    );
}
