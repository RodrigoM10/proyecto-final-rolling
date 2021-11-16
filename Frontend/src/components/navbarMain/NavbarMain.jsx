import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './navbarMain.css'

import { leerDeLocalStorage } from '../../utils/localStorage';
import { NavbarAdmin } from '../navbarAdmin/NavbarAdmin';
import NavbarMainMobile from './NavbarMainMobile';
import { NavTop } from './NavTop';
import { NavMiddle } from './NavMiddle';
import { NavBottom } from './NavBottom.jsx';


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
                    <NavTop
                        handleShow={handleShow}
                        tokenLocal={tokenLocal}
                        user={user}
                        logout={logout}
                        splitLocation={splitLocation}
                        favorites={favorites}
                        cart={cart}
                    />
                    <NavMiddle 
                             splitLocation={splitLocation}
                             favorites={favorites}
                             cart={cart}
                    />
                    <NavBottom
                        filter={filter}
                    />
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

