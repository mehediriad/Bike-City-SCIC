import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found-container container">
            <img src="https://www.pngkit.com/png/detail/930-9306658_404-not-found.png" alt="" />
            <h6><Link to="/home">Go to Home</Link></h6>
        </div>
    );
};

export default NotFound;