import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'



const Menu = () => {
  return (
    <Navbar bg="warning" variant="light">
    <Container>
      <Navbar.Brand as={Link} to="/">T-BURGERS</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/food">Food</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
      );
    }
    

export default Menu