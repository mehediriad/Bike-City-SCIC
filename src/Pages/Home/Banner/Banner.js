import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory();
    const handleBannerBtn = () =>{
        history.push('/products')
    }
    return (
        <div className="banner">
        <div className="container">
        <h3>TAKING RIDES TO A NEWER LEVEL</h3>
       
        <h1> Modern Design For A Sleek Look</h1>
        <h1>The Combination of Prower & Perfection!</h1>
        <p>Consectetur adipiscing elit sed ipsum eiusmod tempor ncdidunt</p>
        
        <p> labore et dolore magna aliqua quis ipsum suspendisse.</p>
        <div className="mt-5">
        <button type="button" class="btn btn-outline-danger btn-lg text-uppercase">Learn More</button>
        <button type="button" class="btn btn-outline-secondary btn-lg ms-5 text-uppercase" onClick={handleBannerBtn}>MotorCycles</button>
        </div>
        </div>
    </div>
    );
};

export default Banner;