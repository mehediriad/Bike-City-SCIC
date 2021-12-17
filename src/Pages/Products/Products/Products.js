import React from 'react';
import { Container } from 'react-bootstrap';
import MotorCycles from '../MotorCycles/MotorCycles';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import './Products.css'

const Products = () => {
    return (
        <div>
            <Header></Header>
            <div className='page-banner'>
                <Container>
                <h5>TAKING RIDES TO A NEWER LEVEL</h5>
                <h1 className="text-uppercase">MotorCycles</h1>
                </Container>
            </div>
            <MotorCycles></MotorCycles>
            <Footer></Footer>
        </div>
    );
};

export default Products;