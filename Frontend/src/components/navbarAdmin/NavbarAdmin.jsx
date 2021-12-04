import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

//React Icons
import { CgProfile } from 'react-icons/cg';
import { FaShareSquare } from 'react-icons/fa';
import { VscMenu } from 'react-icons/vsc';
import { RiArrowGoBackLine } from 'react-icons/ri'
import { leerDeLocalStorage } from '../../utils/localStorage';
import NavbarAdminMobile from './NavbarAdminMobile';

export const NavbarAdmin = ({ user }) => {

    const tokenLocal = leerDeLocalStorage('token') || {};

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('favorites');
        localStorage.removeItem('cart');
        window.location.href = '/';
    }

    return (
        <>
            <Navbar className="bg-blue navbar d-flex flex-column" expand="lg" >
                <Container className="py-3">
                    <div className="d-flex align-items-center contenedor">
                        <div className="d-block d-md-none ">
                            <button
                                className="navbar-button"
                                onClick={handleShow}>
                                <VscMenu />
                            </button>
                        </div>
                        <div className="logo-container" >
                            <img src="https://www.lacasadeel.net/wp-content/uploads/2016/01/Marvel-y-DC2.jpg" alt="img logo" className="nav-logo-desktop" />
                        </div>
                        {/* condicionales del LOGIN */}
                        <div className="d-flex align-items-center login-register">
                            <NavDropdown
                                className="d-flex align-items-center justify-content-center navbar-user mx-2 d-none d-md-block p-0"
                                id="nav-dropdown-ligth-example"
                                title={<span>Hola {user.name} </span>}
                                menuVariant="light"
                            >
                                <NavDropdown.Item className="text-center" as={NavLink} to="/profileAdmin">
                                    <CgProfile className="mb-1" /> Mi perfil
                                </NavDropdown.Item>
                                <NavDropdown.Item className="text-center" as={NavLink} exact to="/"  >
                                    <RiArrowGoBackLine className="mb-1" /> Volver a landing
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                {tokenLocal.token &&
                                    <NavDropdown.Item className="text-center" onClick={logout} >
                                        <FaShareSquare className="mb-1" /> Cerrar sesión
                                    </NavDropdown.Item>}
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
                            <Nav.Link as={NavLink} to="/salesList" activeClassName="link-active" >VENTAS</Nav.Link>
                        </li>
                    </div>
                </Container>
            </Navbar>

            <NavbarAdminMobile setShow={setShow} show={show} user={user} />

        </>
    )
}
