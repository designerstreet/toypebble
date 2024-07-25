import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from '../AuthContext';
import './Navbar.css';

function MyNavbar({ backgroundColor }) {
  const { isAuthenticated,  logout } = useAuth();
  const location = useLocation();

  // Retrieve user data from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};
  const parentname = storedUser.parentname || '';

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? '#FFADAD' : '#000',
    fontWeight: '600',
    borderBottom: location.pathname === path ? '2px solid #FFADAD' : 'none',
    fontFamily: 'sans-serif'
  });

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom" style={{ backgroundColor }}>
      <Container>
        <Navbar.Brand href="/"><img src='/assets/ToyPebble_Logo.png' alt='' width={150} height={100} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="/" style={getLinkStyle('/')}>Home</Nav.Link>
            <Nav.Link href="/#/subscription" style={getLinkStyle('/subscription')}>Subscription</Nav.Link>
            {isAuthenticated && (
              <Nav.Link href="/#/myOrders" style={getLinkStyle('/myOrders')}>My Orders</Nav.Link>
            )}
            <Nav.Link href="/#/toys" style={getLinkStyle('/toys')}>Toys</Nav.Link>
            <Nav.Link eventKey={2} href="/#/ourStory" style={getLinkStyle('/ourStory')}>
              Our Story
            </Nav.Link>
            <Nav.Link href="/#/contact" style={getLinkStyle('/contact')}>Contact Us</Nav.Link>
            {isAuthenticated ? (
             <NavDropdown title={<span style={{ color: 'rgb(232 121 121)', fontWeight: '700' }}>Welcome, {parentname}</span>} id="basic-nav-dropdown">
             <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
           </NavDropdown>
            ) : (
              <Nav.Link href="/#/login" style={{
                border: '1px solid #FFADAD',
                backgroundColor: '#FFADAD',
                borderRadius: '32px',
                color: '#000',
                fontWeight: '600'
              }}>
                Login/Sign Up
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
