import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './ContactContent.css'

const ContactContent = () => {
    return (
        <Container>
             <div className="courses-intro-text">
                <h2>Contact <span style={{color:'blue'}}>Us</span> </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="form w-50 mt-5 mb-5">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Something</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button className="btn btn-primary">Submit</button>
                </Form>
            </div>
        </Container>
    );
};

export default ContactContent;