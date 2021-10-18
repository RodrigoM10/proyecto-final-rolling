import React, { useState } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';


//React Icons
import { BsFacebook } from 'react-icons/bs';
import { FaShareSquare, FaUserAlt, FaWrench } from 'react-icons/fa';
import { VscMenu, VscSearch, VscClose } from 'react-icons/vsc';
import { GrTwitter, GrYoutube } from 'react-icons/gr';
import {RiArrowGoBackLine} from 'react-icons/ri'
import { leerDeLocalStorage } from '../../utils/localStorage';


export const NavbarAdmin = ({ user }) => {

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
                           LOGO/HOME
                        </div>
                        {/* condicionales del LOGIN */}
                        <div className="d-flex align-items-center login-register">
                        {/* <NavLink className="text-center" as={NavLink} to="/adminProfile" exact activeClassName="link-active" >{user.name}-{user.lastName}</NavLink> */}
                            <NavDropdown
                                className="d-flex align-items-center justify-content-center navbar-user mx-2 d-none d-md-block p-0"
                                id="nav-dropdown-ligth-example"
                                title={    
                                    <FaUserAlt className="mb-1" />
                                }
                                menuVariant="light"
                            >
                                {/* <NavDropdown.Item className="text-center" as={NavLink} to="/adminProfile" exact >Mi Perfil</NavDropdown.Item> */}
                                <NavDropdown.Item className="text-center" as={NavLink} to="/" exact><RiArrowGoBackLine className="mb-1" /> Volver a landing</NavDropdown.Item>
                                <NavDropdown.Divider />
                                {tokenLocal.token && <NavDropdown.Item className="text-center" onClick={logout} > <FaShareSquare className="mb-1"/> Cerrar sesión</NavDropdown.Item>}
                            </NavDropdown>
                        </div>
                    </div>
                </Container>
                <Container className="pb-2 d-none d-md-block">
                    <div className="d-flex align-items-center justify-content-center w-100 navbar-links">
                        <li className="p-2 mx-3" >
                            <Nav.Link as={NavLink} to="/adminBoard" exact activeClassName="link-active">PRODUCTOS</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/messagesList" activeClassName="link-active">MENSAJES</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/userList" activeClassName="link-active" >USUARIOS</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/adminProfile" activeClassName="link-active" >PERFIL</Nav.Link>
                        </li>
                    </div>
                </Container>
            </Navbar>

            {/* navbar responsive* */}
            <Offcanvas show={show} onHide={handleClose} className="responsive-navbar text-white">
                <Offcanvas.Header className="responsive-navbar-header">
                    <Offcanvas.Title>Logo</Offcanvas.Title>
                    <button type="button" aria-label="Close" className="navbar-button" onClick={handleClose} ><VscClose /></button>
                </Offcanvas.Header>
                <Offcanvas.Header className="d-flex flex-column bienvenido-user">
                    <div className="d-flex justify-content-evenly">
                        <NavLink as={NavLink} to="adminProfile">
                            <button className="responsive-navbar-button">Mi Perfil</button>
                        </NavLink>
                        <button onClick={logout} className="responsive-navbar-button">Cerrar Sesion</button>
                    </div>
                </Offcanvas.Header>

                <Offcanvas.Body >
                    <div className="responsive-navbar-links text-center ">
                        <li className="p-2 mx-3" >
                            <Nav.Link as={NavLink} to="/adminBoard" exact activeClassName="link-active">PRODUCTOS</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/messagesList" activeClassName="link-active" >MENSAJES</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/userList" activeClassName="link-active" >USUARIOS</Nav.Link>
                        </li>
                        <li className="p-2 mx-3">
                            <Nav.Link as={NavLink} to="/" activeClassName="link-active"><RiArrowGoBackLine className="mb-1" />  VOLVER A LANDING</Nav.Link>
                        </li>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
