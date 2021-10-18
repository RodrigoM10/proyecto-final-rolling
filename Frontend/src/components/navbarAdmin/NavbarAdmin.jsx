import React, { useState } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';


//React Icons
import { BsCart, BsCartFill, BsFacebook } from 'react-icons/bs';
import { FaHeart, FaRegHeart, FaShareSquare, FaUserAlt, FaWrench } from 'react-icons/fa';
import { VscMenu, VscSearch, VscClose } from 'react-icons/vsc';
import { GrTwitter, GrYoutube } from 'react-icons/gr';
import { leerDeLocalStorage } from '../../utils/localStorage';


export const NavbarAdmin = ( {user} ) => {

    const tokenLocal = leerDeLocalStorage('token') || {};
    // asigno la variable location
    const location = useLocation();
    //destructuro pathname from location
    const { pathname } = location;
    //js split method para obtener el nombre del path del array
    const splitLocation = pathname.split("/");
    console.log("🚀 ~ file: NavbarMain.jsx ~ line 27 ~ NavbarMain ~ splitLocation", splitLocation)
    const history = useHistory();


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        history.push('/');;
    }

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
                        {/* condicionales del LOGIN */}
                        <div className="d-flex align-items-center login-register">
                            <NavDropdown
                                className="d-flex align-items-center justify-content-center navbar-user mx-2 d-none d-md-block "
                                id="nav-dropdown-ligth-example"
                                title={<FaUserAlt />}
                                menuVariant="light"
                            >
                                <NavDropdown.Item className="text-center" as={NavLink} to="/"><FaWrench />Volver a landing</NavDropdown.Item>
                                <NavDropdown.Divider />
                                {tokenLocal.token && <NavDropdown.Item className="text-center" onClick={logout} > <FaShareSquare />Logout</NavDropdown.Item>}
                            </NavDropdown>
                        </div>
                    </div>
                </Container>
                <Container className="pb-2 d-none d-md-block">
                    <div className="d-flex align-items-center justify-content-center w-100 navbar-links">
                        <li className="p-2 mx-3" >
                            <Nav.Link as={NavLink} to="/adminBoard" exact activeClassName="link-active">BOARD</Nav.Link>
                        </li>
                        <li className="p-2 mx-3" >
                            <Nav.Link as={NavLink} to={`/adminBoard/${user.id}`} exact activeClassName="link-active">PERFIL</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/messagesList" activeClassName="link-active">MENSAJES</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/userList" activeClassName="link-active" >USUARIOS</Nav.Link>
                        </li>
                    </div>
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} className="responsive-navbar text-white">
                <Offcanvas.Header className="responsive-navbar-header">
                    <Offcanvas.Title>Logo</Offcanvas.Title>
                    <button type="button" aria-label="Close" className="navbar-button" onClick={handleClose} ><VscClose /></button>
                </Offcanvas.Header>
                {/* si no hay registrado ningun usuario entonces lo de siempre */}
                {!tokenLocal.token
                    &&
                    <Offcanvas.Header className="d-flex justify-content-evenly">
                        <a href="/login">
                            <button className="responsive-navbar-button">Iniciar sesión</button>
                        </a>
                        <a href="/register">
                            <button exact className="responsive-navbar-button">Registrarse</button>
                        </a>
                    </Offcanvas.Header>
                }
                <Offcanvas.Header className="d-flex flex-column bienvenido-user">
                    <div className="d-flex justify-content-evenly">
                        <a href="/"><button className="responsive-navbar-button">Volver a landing</button></a>
                        <button onClick={logout} className="responsive-navbar-button">Cerrar Sesion</button>
                    </div>
                </Offcanvas.Header>

                <Offcanvas.Body >
                    <div className="responsive-navbar-links text-center ">
                        <li className="p-2 mx-3" >
                            <Nav.Link as={NavLink} to="/store" exact activeClassName="link-active">PERFIL</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/contact" activeClassName="link-active">MENSAJES</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/about" activeClassName="link-active" >USUARIOS</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/about" activeClassName="link-active" >PRODUCTOS</Nav.Link>
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
