import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const Congratulations = () => {
    return (
        <>
        <Header></Header>
        <Container>
            
            <h2>Congratulations!</h2>
            <h2>Your Account Registered Successfully!</h2>
        </Container>
        </>
    );
};

export default Congratulations;