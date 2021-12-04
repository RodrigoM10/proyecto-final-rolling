import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, Offcanvas } from 'react-bootstrap';
import './navbarMain.css'


//React Icons
import { BsFacebook } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { GrTwitter } from 'react-icons/gr';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { FaWrench } from 'react-icons/fa';

const NavbarMainMobile = ({ user, setShow, show }) => {
    const tokenLocal = leerDeLocalStorage('token') || {};
    const handleClose = () => setShow(false);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('favorites');
        localStorage.removeItem('cart');
        window.location.href = '/';
    }

    return (
        <Offcanvas show={show} onHide={handleClose} className="responsive-navbar text-white">
            <Offcanvas.Header className="responsive-navbar-header">
                <div className="logo-container" >
                    <NavLink as={NavLink} to="/" onClick={handleClose}>
                        <img src="https://www.lacasadeel.net/wp-content/uploads/2016/01/Marvel-y-DC2.jpg" alt="img logo" className="nav-logo-desktop" />
                    </NavLink>
                </div>
                <button type="button" aria-label="Close" className="navbar-button mx-1" onClick={handleClose} ><VscClose /></button>
            </Offcanvas.Header>
            {!tokenLocal.token
                &&
                <Offcanvas.Header className="d-flex justify-content-evenly">
                    <a href="/login">
                        <button className="btn-general-style">Iniciar sesión</button>
                    </a>
                    <a href="/register">
                        <button   className="btn-general-style">Registrarse</button>
                    </a>
                </Offcanvas.Header>
            }
            {user.role === 'user' &&
                <Offcanvas.Header className="d-flex flex-column bienvenido-user">
                    <p>Bienvenido Sr/a {user.name}</p>
                    <div>
                        <NavLink as={NavLink} to="/myProfile" onClick={handleClose}>
                            <button className="btn-general-style px-4" >Mi Perfil</button>
                        </NavLink>
                        <button onClick={logout} className="btn-general-style">Cerrar Sesion</button>
                    </div>
                </Offcanvas.Header>
            }
            {/* si esta registrado un usuario admin entonces se muestra */}
            {user.role === 'admin'
                &&
                <Offcanvas.Header className="d-flex flex-column bienvenido-user">
                    <p>Bienvenido Sr/a {user.name}</p>
                    <div className="d-flex justify-content-evenly">
                        <NavLink  as={NavLink} to="/myProfile" onClick={handleClose} >
                            <button className="btn-general-style px-4">Mi Perfil</button>
                        </NavLink>
                        <button onClick={logout} className="btn-general-style p-1">Cerrar Sesion</button>
                    </div>
                </Offcanvas.Header>
            }
            <Offcanvas.Body >
                <div className="responsive-navbar-links text-center ">
                    <li className="p-2 mx-3" >
                        <Nav.Link as={NavLink} to="/store"  exact activeClassName="link-active" onClick={handleClose}>NUESTROS VINOS</Nav.Link>
                    </li>
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/contact" activeClassName="link-active" onClick={handleClose}>CONTACTO</Nav.Link>
                    </li>
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/about" activeClassName="link-active" onClick={handleClose}>HISTORIA</Nav.Link>
                    </li>
                    {user.role === 'admin' &&      
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/adminBoard" activeClassName="link-active"><FaWrench className="mb-1 me-2" />ADMIN BOARD</Nav.Link>
                    </li>
                    }

                </div>
                <div className="navbar-responsive-redes">
                    <Offcanvas.Title className="navbar-responsive-subtitle mt-3">Seguinos en nuestras redes</Offcanvas.Title>
                    <div className="navbar-responsive-icons-container d-flex justify-content-evenly my-5">
                        <li>
                            <a href="/facebook" className="face-icon"><BsFacebook /></a>
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
    )
}

export default NavbarMainMobile
