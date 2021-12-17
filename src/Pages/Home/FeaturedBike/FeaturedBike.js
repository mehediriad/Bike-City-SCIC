import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Bike from '../../Products/Bike/Bike';
import './FeaturedBike.css';

const FeaturedBike = () => {
    const [products,setProducts] = useProducts();
    return (
        <div>
            
               <div className="featured-bike-heading mt-5 mb-5">
                    <span><FontAwesomeIcon icon={faMotorcycle}/></span>
                    <h5>TAKING RIDES TO A NEWER LEVEL</h5>
                    <h1 className="text-uppercase">Choose a MotorCycle</h1>
                    <p className="w-50 text-muted mx-auto ">Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comds
consequat duis aute irure dolor repreh enderit in voluptate velit esse cilum.</p>
               </div>
               <div className="card-container container">
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map((product ,index)=>index<6 && <Bike 
                    key={product._id}
                    product={product}
                    ></Bike>)
                 }
                </Row>
            </div>
            
       
               
        </div>
    );
};

export default FeaturedBike;