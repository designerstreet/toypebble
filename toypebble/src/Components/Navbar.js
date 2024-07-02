// src/Navbar.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

// import './Navbar.css';

function MyNavbar({ backgroundColor }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom" style={{ backgroundColor }}>
      <Container>
        <Navbar.Brand href="/"><img src='/assets/ToyPebble_Logo.png' alt='' width={80} height={80}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
          <Nav.Link href="/#/subscription"> Subscription</Nav.Link>
          <Nav.Link href="/#/myOrders"> My Orders</Nav.Link>
            <Nav.Link href="/#/toys"> Toys</Nav.Link>
            <Nav.Link eventKey={2} href="/#/ourStory">
              Our Story 
            </Nav.Link>
            <Nav.Link href="#"> Contact</Nav.Link>
            <Nav.Link href="/#/login" style={{ border: '1px solid #FFADAD', backgroundColor: '#FFADAD', borderRadius: '32px'}}>
              Login/Sign Up 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
