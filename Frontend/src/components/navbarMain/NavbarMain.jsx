import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './navbarMain.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


//React Icons
import { BsCart, BsCartFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaHeart, FaRegHeart, FaShareSquare, FaWrench } from 'react-icons/fa';
import { VscMenu, VscSearch } from 'react-icons/vsc';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { NavbarAdmin } from '../navbarAdmin/NavbarAdmin';
import NavbarMainMobile from './NavbarMainMobile';


export const NavbarMain = ({ user, favorites }) => {

    const tokenLocal = leerDeLocalStorage('token') || {};
    // asigno la variable location
    const location = useLocation();
    //destructuro pathname from location
    const { pathname } = location;
    //js split method para obtener el nombre del path del array
    const splitLocation = pathname.split("/");


    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('favorites');
        window.location.href = '/';
    }

    return (
        <>
            {splitLocation[1] !== "adminBoard" && splitLocation[1] !== "messagesList" && splitLocation[1] !== "userList" && splitLocation[1] !== "profileAdmin" &&
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
                                <a href="/"  >
                                    <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1635351530/logo8_vfohit.png" alt="img logo" className="nav-logo-desktop" />
                                </a>
                            </div>
                            {/* condicionales del LOGIN */}
                            <div className="d-flex align-items-center login-register">
                                {
                                    !tokenLocal.token
                                    &&
                                    <span className="d-flex align-items-center navbar-log mx-2 d-none d-md-block ">
                                        <a href="/login" className={splitLocation[1] === "login" ? "link-active pe-2 ps-1 py-1" : "text-white pe-2 ps-1 py-1"}>Iniciar sesión</a>
                                        <span>/</span>
                                        <a href="/register" className={splitLocation[1] === "register" ? "link-active pe-2 ps-1 py-1" : "text-white pe-2 ps-1 py-1"}>Registrarse</a>
                                    </span>
                                }
                                {
                                    user.role === 'admin'
                                    &&
                                    <NavDropdown
                                        className="d-flex align-items-center justify-content-center navbar-user mx-2 d-none d-md-block "
                                        id="nav-dropdown-ligth-example"
                                        title={<span className="text-white">Hola {user.name} </span>}
                                        menuVariant="ligth"
                                    >
                                        <NavDropdown.Item className="text-center" as={NavLink} to="/myProfile"><CgProfile className="mb-1" /> Mi perfil</NavDropdown.Item>
                                        <NavDropdown.Item className="text-center" as={NavLink} to="/adminBoard"><FaWrench className="mb-1" /> Admin Board</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        {tokenLocal.token && <NavDropdown.Item className="text-center" onClick={logout} > <FaShareSquare className="mb-1" /> Cerrar sesión</NavDropdown.Item>}
                                    </NavDropdown>
                                }
                                {
                                    user.role === 'user'
                                    &&
                                    <NavDropdown
                                        className="d-flex align-items-center navbar-user mx-2 d-none d-md-block"
                                        id="nav-dropdown-light-example"
                                        title={<span>Hola {user.name} </span>}
                                        menuVariant="light"
                                    >
                                        <NavDropdown.Item className="text-center" as={NavLink} to="/myProfile"><CgProfile className="mb-1" /> Mi perfil</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        {tokenLocal.token && <NavDropdown.Item className="text-center" onClick={logout} > <FaShareSquare className="mb-1" /> Cerrar sesión</NavDropdown.Item>}
                                    </NavDropdown>
                                }
                                <span className="d-flex align-items-center navbar-icons">
                                    <a href="/favorite" className="me-3 position-relative">
                                        {splitLocation[1] === "favorite" ? <FaHeart /> : <FaRegHeart />}
                                        {
                                            favorites.length > 0 &&
                                            <span className="swym-header--count">{favorites.length}</span>
                                        }
                                    </a>
                                    <a href="/cart" className="position-relative">
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
                            <div className="input-group mb-3 border-0">
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
            }
            {splitLocation[1] !== "adminBoard" && splitLocation[1] !== "messagesList" && splitLocation[1] !== "userList" && splitLocation[1] !== "adminProfile" &&
                <NavbarMainMobile user={user} setShow={setShow} show={show} />
            }
            {splitLocation[1] === "adminBoard" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "messagesList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "userList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "profileAdmin" && <NavbarAdmin user={user} />}
        </>

    )
}

