import React from 'react';
import { Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Bike from '../Bike/Bike';

const MotorCycles = () => {
    const [products,setProducts] = useProducts();
    return (
        <div className="products-container mt-5">
            
        <div className="card-container container">
        <Row xs={1} md={3} className="g-4">
           
           
            {
                products.map(product=><Bike 
                key={product._id}
                product={product}
                ></Bike>)
            }
             
            
         </Row>
        </div>
        
    </div>
    );
};

export default MotorCycles;