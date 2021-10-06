import React, { useState } from 'react'
import './navbarMain.css'
import { Col, Container, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';


//React Icons
import { BsCart2 } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import { GrMenu } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';

export const NavbarMain = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
<>
        <Navbar className="navbar d-flex flex-column" expand="lg" >
            <Container className="py-3">
                {/* ACOMODAR DIVS A GUSTO DUDA NO SE COMO HACER !!!!!!! NO PUEDO :s */}
                <div className="d-flex align-items-center w-100 justify-content-between ">
                    <div className="d-block d-md-none">
                        <button className="navbar-button" onClick={handleShow}><GrMenu /></button>
                    </div>
                    <div className="">
                        <div>
                            <a href="/" className="nav-logo-desktop" >
                                LOGO/HOME
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <div className="d-flex align-items-center">
                            <span className="navbar-log me-2 d-none d-md-block">
                                <a href="/login" className=" text-white pe-2 ps-1 py-1">Iniciar sesión</a>
                                <span>/</span>
                                <a href="/register" className=" text-white pe-2 ps-1 py-1">Registrarse </a>
                            </span>
                            <span className="navbar-icons ms-4">
                                <a href="/favourite" className="me-3" ><FaRegHeart /></a>
                                <a href="/cart"><BsCart2 /></a>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="pb-2 d-none d-md-block">
                <div className="d-flex align-items-center justify-content-center w-100 navbar-links">
                    <div className="p-2 mx-3">
                        <a href="/store"> NUESTROS VINOS</a>
                    </div>
                    <div className="p-2 mx-3">
                        <a href="/store">VISITAS</a>
                    </div>
                    <div className="p-2 mx-3">
                        <a href="/about">HISTORIA</a>
                    </div>

                </div>
            </Container>
            <Container className="pb-2 d-flex justify-content-center">
                <form className="search-form" >
                    <div class="input-group mb-3 border-0">
                        <span
                            className="search-icon"
                            id="basic-addon1"><VscSearch /></span>
                        <input
                            type="text"
                            className="col-11 search-input"
                            placeholder="Buscá tu vino "
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </form>
            </Container>
        </Navbar>

            <Offcanvas show={show} onHide={handleClose} className="responsive-navbar text-white">
            <Offcanvas.Header className="responsive-navbar-header">
            <Offcanvas.Title>Logo</Offcanvas.Title>
            <button type="button" aria-label="Close" className="navbar-button" onClick={handleClose} ><GrClose /></button>
            </Offcanvas.Header>
            <Offcanvas.Header className="d-flex justify-content-evenly">
            <button href="/login" exact className="responsive-navbar-button">Iniciar sesión</button>
            <button  href="/register" exact className="responsive-navbar-button">Registrarse</button>
            </Offcanvas.Header>
            <Offcanvas.Body >
            </Offcanvas.Body>
            </Offcanvas>
        </>

    )
}

    // {/* <Navbar.Brand href="#">Navbar</Navbar.Brand>
    // <Nav>
    //     <Nav.Link as={NavLink} to="/" exact activeClassName="text-white">Home</Nav.Link>
    //     <Nav.Link as={NavLink} to="/about" exact activeClassName="text-white">About</Nav.Link>
    //     <Nav.Link as={NavLink} to="/store" exact activeClassName="text-white">Store</Nav.Link>
    //     <Nav.Link as={NavLink} to="/login" exact activeClassName="text-white">Login</Nav.Link>
    //     <Nav.Link as={NavLink} to="/register" exact activeClassName="text-white">Register</Nav.Link>
    //     <Nav.Link as={NavLink} to="/cart" exact activeClassName="text-white">Carrito</Nav.Link>
    // </Nav> */}
