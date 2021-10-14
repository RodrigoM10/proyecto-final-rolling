import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './navbarMain.css'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';


//React Icons
import { BsCart, BsCartFill, BsFacebook } from 'react-icons/bs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { VscMenu, VscSearch, VscClose } from 'react-icons/vsc';
import { GrTwitter, GrYoutube } from 'react-icons/gr';




export const NavbarMain = () => {


    // asigno la variable location
    const location = useLocation();
    //destructuro pathname from location
    const { pathname } = location;
    //js split method para obtener el nombre del path del array
    const splitLocation = pathname.split("/");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Navbar className="navbar d-flex flex-column" expand="lg" >
                <Container className="py-3">
                    {/* ACOMODAR DIVS A GUSTO DUDA NO SE COMO HACER !!!!!!! NO PUEDO :s */}
                    <div className="d-flex align-items-center contenedor">
                        <div className="d-block d-md-none ">
                            <button
                                className="navbar-button"
                                onClick={handleShow}>
                                {/* <GrMenu /> */}
                                <VscMenu />
                            </button>
                        </div>
                        <div className="logo-container" >
                            <a href="/" className="nav-logo-desktop" >
                                LOGO/HOME
                            </a>
                        </div>
                        <div className="d-flex align-items-center login-register">
                            <span className="d-flex align-items-center navbar-log mx-2 d-none d-md-block ">
                                <a href="/login" className={splitLocation[1] === "login" ? "link-active pe-2 ps-1 py-1" : "text-white pe-2 ps-1 py-1"}>Iniciar sesión</a>
                                <span>/</span>
                                <a href="/register" className={splitLocation[1] === "register" ? "link-active pe-2 ps-1 py-1" : "text-white pe-2 ps-1 py-1"}>Registrarse</a>
                            </span>
                            <span className="d-flex align-items-center navbar-icons">
                                <a href="/favourite" className="me-3">
                                    {splitLocation[1] === "favourite" ? <FaHeart /> : <FaRegHeart />}
                                </a>
                                <a href="/cart">
                                    {splitLocation[1] === "cart" ? < BsCartFill /> : <BsCart />}
                                </a>
                            </span>
                        </div>
                    </div>
                </Container>
                <Container className="pb-2 d-none d-md-block">
                    <div className="d-flex align-items-center justify-content-center w-100 navbar-links">
                        <li className="p-2 mx-3" >
                            <Nav.Link as={NavLink} to="/store" exact activeClassName="link-active">NUESTROS VINOS</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/contact" activeClassName="link-active">CONTACTO</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/about" activeClassName="link-active" >HISTORIA</Nav.Link>
                        </li>
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
                    <button type="button" aria-label="Close" className="navbar-button" onClick={handleClose} ><VscClose /></button>
                </Offcanvas.Header>
                <Offcanvas.Header className="d-flex justify-content-evenly">
                    <a href="/login">
                        <button className="responsive-navbar-button">Iniciar sesión</button>
                    </a>
                    <a href="/register">
                    <button  exact className="responsive-navbar-button">Registrarse</button>
                    </a>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <div className="responsive-navbar-links text-center ">
                        <li className="p-2 mx-3" >
                            <Nav.Link as={NavLink} to="/store" exact activeClassName="link-active" onClick={handleClose}>NUESTROS VINOS</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/contact" activeClassName="link-active" onClick={handleClose}>CONTACTO</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/about" activeClassName="link-active" onClick={handleClose}>HISTORIA</Nav.Link>
                        </li>
                    </div>
                    <div className="navbar-responsive-redes">
                        <Offcanvas.Title className="navbar-responsive-subtitle mt-3">Seguinos en nuestras redes</Offcanvas.Title>
                        <div className="navbar-responsive-icons-container row row-cols-4 my-5">
                            <li>
                                <a href="/facebook" className="face-icon"><BsFacebook /></a>
                            </li>
                            <li>
                                <a href="/youtube" className="youtube-icon"><GrYoutube /></a>
                            </li>
                            <li>
                                <a href="/twitter" className="twitter-icon"><GrTwitter /></a>
                            </li>
                            <li>
                                <a href="/instagram" >
                                    <img className="insta-icon" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1633621890/instagram_qmyrkp.png" alt="" />
                                </a>
                            </li>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>

    )
}

