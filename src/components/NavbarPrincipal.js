import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const  NavbarPrincipal = () => {
  return (
    <>
       
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CALZADOS BUMERANG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="Login.js" target='_blank'>Login</Nav.Link>
            <Nav.Link href="#link">Inventario</Nav.Link>
            <Nav.Link href="#link">Portafolio</Nav.Link>
            <NavDropdown title="Acerca De" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mision</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vision                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Objetivos Misionales</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contactenos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
} 

export default NavbarPrincipal