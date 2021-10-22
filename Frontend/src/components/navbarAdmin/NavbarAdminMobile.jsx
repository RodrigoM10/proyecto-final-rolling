import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { Nav, Offcanvas } from 'react-bootstrap';

//React Icons
import { VscClose } from 'react-icons/vsc';
import { RiArrowGoBackLine } from 'react-icons/ri';

const NavbarAdminMobile = (props) => {
    const { setShow, show } = props;
    const history = useHistory();

    const handleClose = () => setShow(false);

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
        <Offcanvas.Header className="d-flex flex-column bienvenido-user">
            <div className="d-flex justify-content-evenly">
                <NavLink as={NavLink} to="/profileAdmin">
                    <button className="responsive-navbar-button px-4">Mi Perfil</button>
                </NavLink>
                <button onClick={logout} className="responsive-navbar-button p-1">Cerrar Sesion</button>
            </div>
        </Offcanvas.Header>

        <Offcanvas.Body >
            <div className="responsive-navbar-links text-center ">
                <li className="p-2 mx-3" >
                    <Nav.Link as={NavLink} to="/adminBoard" exact activeClassName="link-active" onClick={handleClose}>PRODUCTOS</Nav.Link>
                </li>
                <li className="p-2 mx-3">
                    <Nav.Link as={NavLink} to="/messagesList" activeClassName="link-active" onClick={handleClose}>MENSAJES</Nav.Link>
                </li>
                <li className="p-2 mx-3">
                    <Nav.Link as={NavLink} to="/userList" activeClassName="link-active" onClick={handleClose}>USUARIOS</Nav.Link>
                </li>
                <li className="p-2 mx-3">
                    <Nav.Link as={NavLink} to="/" activeClassName="link-active"><RiArrowGoBackLine className="mb-1" onClick={handleClose}/>  VOLVER A LANDING</Nav.Link>
                </li>
            </div>
        </Offcanvas.Body>
    </Offcanvas>
 
    )
}

export default NavbarAdminMobile
