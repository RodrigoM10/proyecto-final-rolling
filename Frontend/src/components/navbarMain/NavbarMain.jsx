import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './navbarMain.css'

//React Icons
import { BsCart, BsCartFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaHeart, FaRegHeart, FaShareSquare, FaWrench } from 'react-icons/fa';
import { VscMenu, VscSearch } from 'react-icons/vsc';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { NavbarAdmin } from '../navbarAdmin/NavbarAdmin';
import NavbarMainMobile from './NavbarMainMobile';


export const NavbarMain = ({ user, favorites, cart, setBusqueda }) => {
    const history = useHistory();
    const tokenLocal = leerDeLocalStorage('token') || {};

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('favorites');
        localStorage.removeItem('cart');
        window.location.href = '/';
    }

    // Funcion de busqueda
    const filter = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        history.push('/store');
        setBusqueda(keyword);
    };

    return (
        <>
            {splitLocation[1] !== "adminBoard"
                && splitLocation[1] !== "messagesList"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "profileAdmin"
                && splitLocation[1] !== "salesList"
                &&
                <>
                    <nav className="navbar bg-blue d-flex  fix-to-top " expand="lg" >
                        <Container className="py-3 ">
                            <div className="d-flex align-items-center contenedor">
                                <div className="d-block d-md-none ">
                                    <button
                                        className="navbar-button"
                                        onClick={handleShow}>
                                        <VscMenu />
                                    </button>
                                </div>
                                <div className="logo-container" >
                                    <a href="/"  >
                                        <img src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1635957069/logo_11_r58drd.png" alt="img logo" className="nav-logo-desktop" />
                                    </a>
                                </div>
                                {/* condicionales del LOGIN */}
                                <div className="d-flex align-items-center login-register">
                                    {
                                        !tokenLocal.token
                                        &&
                                        <span className="d-flex align-items-center navbar-log mx-2 d-none d-md-block ">
                                            <a href="/login"
                                                className={splitLocation[1] === "login" ?
                                                    "link-active pe-2 ps-1 py-1" : "text-white pe-2 ps-1 py-1"}>
                                                Iniciar sesión</a>
                                            <span>/</span>
                                            <a href="/register"
                                                className={splitLocation[1] === "register" ?
                                                    "link-active pe-2 ps-1 py-1" : "text-white pe-2 ps-1 py-1"}>
                                                Registrarse</a>
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
                                            <NavDropdown.Item
                                                className="text-center" as={NavLink} to="/myProfile">
                                                <CgProfile className="mb-1" /> Mi perfil
                                            </NavDropdown.Item>
                                            <NavDropdown.Item
                                                className="text-center" as={NavLink} to="/adminBoard">
                                                <FaWrench className="mb-1" /> Admin Board
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            {tokenLocal.token &&
                                                <NavDropdown.Item className="text-center" onClick={logout} >
                                                    <FaShareSquare className="mb-1" /> Cerrar sesión
                                                </NavDropdown.Item>
                                            }
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
                                            <NavDropdown.Item
                                                className="text-center" as={NavLink} to="/myProfile">
                                                <CgProfile className="mb-1" /> Mi perfil
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            {tokenLocal.token &&
                                                <NavDropdown.Item className="text-center" onClick={logout} >
                                                    <FaShareSquare className="mb-1" /> Cerrar sesión
                                                </NavDropdown.Item>
                                            }
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
                                            {
                                                cart.length > 0 &&
                                                <span className="swym-header--count">{cart.length}</span>
                                            }
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </Container>
                        <Container className="pb-2 d-none d-md-block border-0">
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
                    </nav>
                    <nav className="bg-blue">  
                    <Container className="py-2 d-flex justify-content-center ">
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
                                    onChange={filter}
                                />
                            </div>
                        </form>
                    </Container>
                    </nav>
                </>
            }
            {splitLocation[1] !== "adminBoard"
                && splitLocation[1] !== "messagesList"
                && splitLocation[1] !== "userList"
                && splitLocation[1] !== "adminProfile"
                && splitLocation[1] !== "salesList"
                &&
                <NavbarMainMobile user={user} setShow={setShow} show={show} />
            }
            {splitLocation[1] === "adminBoard" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "messagesList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "userList" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "profileAdmin" && <NavbarAdmin user={user} />}
            {splitLocation[1] === "salesList" && <NavbarAdmin user={user} />}
        </>

    )
}

