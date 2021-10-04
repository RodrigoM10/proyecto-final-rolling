import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavbarMain = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav>
                    <Nav.Link as={NavLink} to="/" exact activeClassName="text-white">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" exact activeClassName="text-white">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/store" exact activeClassName="text-white">Store</Nav.Link>
                    <Nav.Link as={NavLink} to="/login" exact activeClassName="text-white">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/register" exact activeClassName="text-white">Register</Nav.Link>
                    <Nav.Link as={NavLink} to="/cart" exact activeClassName="text-white">Carrito</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
