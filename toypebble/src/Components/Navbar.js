// src/Navbar.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

// import './Navbar.css';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home"><img src='/assets/ToyPebble_Logo.png' alt='' width={80} height={80}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
          <Nav.Link href="#deets"> My Orders</Nav.Link>
            <Nav.Link href="#deets"> Toys</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Our Story 
            </Nav.Link>
            <Nav.Link href="#deets"> Contact</Nav.Link>
            <Nav.Link href="/#/login">
              Login/Sign Up 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
