import React from 'react';
import { Container } from 'react-bootstrap';
import './MiddleBanner.css'

const MiddleBanner = () => {
    return (
        <Container>
            <div className="middle-banner">
            <div className="middle-banner-item">
                <img src="https://pro-theme.com/html/keymoto/assets/img/img-info.png"/>
            </div>
            <div>
            <div className="middle-banner-item featured-bike-heading mt-5 mb-5 text-start">
                    
                    <h5>TAKING RIDES TO A NEWER LEVEL</h5>
                    <h1 className="text-uppercase">A STEP ABOVE WITH
RIDER-FRIENDLY NATURE</h1>
                    <p className="text-muted mx-auto ">Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip ex consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cilum dol sed ipsum nulla pariatur nostrul done elit magna.</p>
               </div>
            </div>
        </div>
        </Container>
    );
};

export default MiddleBanner;