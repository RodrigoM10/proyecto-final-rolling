import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import './navbarMain.css'
import { Nav, Offcanvas } from 'react-bootstrap';


//React Icons
import { BsFacebook } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { GrTwitter, GrYoutube } from 'react-icons/gr';
import { leerDeLocalStorage } from '../../utils/localStorage';

const NavbarMainMobile = (props) => {
    const { user, setShow, show } = props;
    const tokenLocal = leerDeLocalStorage('token') || {};
    const history = useHistory();

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        history.push('/');;
    }


    return (
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

            {/* si esta registrado un usuario con token valido entonces se muestra */}
            {user.role === 'user' &&
                <Offcanvas.Header className="d-flex flex-column justify-content-evenly bienvenido-user">
                    <p>Bienvenido Sr/a {user.name}</p>
                    <div>
                        <button onClick={logout} className="responsive-navbar-button">Cerrar Sesion</button>
                    </div>
                </Offcanvas.Header>
            }
            {/* si esta registrado un usuario admin entonces se muestra */}
            {user.role === 'admin'
                &&
                <Offcanvas.Header className="d-flex flex-column bienvenido-user">
                    <p>Bienvenido Sr/a {user.name}</p>
                    <div className="d-flex justify-content-evenly">
                        <NavLink as={NavLink} to="/adminBoard">
                            <button className="responsive-navbar-button">Admin Board</button>
                        </NavLink>
                        <button onClick={logout} className="responsive-navbar-button">Cerrar Sesion</button>
                    </div>
                </Offcanvas.Header>
            }
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
    )
}

export default NavbarMainMobile
