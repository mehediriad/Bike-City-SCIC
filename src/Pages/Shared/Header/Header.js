import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./Header.css"

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="header">
            <Navbar bg="light" variant="light" sticky="top" expand="lg">
                <Container>
                <Navbar.Brand><Link to="/home" className="brand-logo"><FontAwesomeIcon icon={faMotorcycle}/>BikeCity</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                {user?.email && <Nav.Link><Link to="/dashboard">Dashboard</Link></Nav.Link>}
                <Nav.Link><Link to="/products">Products</Link></Nav.Link>
                
                
               
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                </Nav>
                
                
               {
                   user?.email ? 
                    <div className="d-flex">
                        <Nav.Link><Link to="/dashboard">{user.displayName}</Link></Nav.Link>
                        <button className="btn btn-primary" onClick={logOut}>LogOut</button>
                    </div>
                   :
                   <div className="login-reg d-flex">
                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                        <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                 </div>
               }
               
                </Navbar.Collapse>
                
               
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;