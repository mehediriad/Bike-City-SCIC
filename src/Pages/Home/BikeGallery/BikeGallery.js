import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import './BikeGallery.css';

const BikeGallery = () => {
    const [products,setProducts] = useProducts();
    return (
        <Container>
            <div className="featured-bike-heading mt-5 mb-5">
                    
                    <h5>TAKING RIDES TO A NEWER LEVEL</h5>
                    <h1 className="text-uppercase">Latest Bike Gallery</h1>
                    <p className="w-50 text-muted mx-auto ">Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comds
                        consequat duis aute irure dolor repreh enderit in voluptate velit esse cilum.</p>
               </div>
               <div className="card-container container">
                <Container>
                    <Row>
                        {
                            products.map((product ,index)=>index<8 && <Col className="gallery" md={3} sm={3} >

                                <img src={product.img} alt="Bike"/>
                            </Col>)
                        }
                    </Row>
                </Container>
               </div>
        </Container>
    );
};

export default BikeGallery;