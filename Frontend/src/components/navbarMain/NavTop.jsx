import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { VscMenu } from 'react-icons/vsc'
import './navbarMain.css'
import { NavUser } from './NavUser'

export const NavTop = ({ handleShow, tokenLocal, splitLocation, user, logout, favorites, cart }) => {

    const [isVisible, setIsVisible] = useState('');
    let prevScrollpos = window.pageYOffset;
    const navbarShow = () => {
        if (prevScrollpos >  window.pageYOffset ) {
            setIsVisible('visible');
        } else {
           setIsVisible('no-visible')
        }
        prevScrollpos =  window.pageYOffset;
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarShow)
        return () => {
            window.removeEventListener('scroll', navbarShow)
        }
    });


    return (        
        <nav className={`navbar bg-blue d-flex fix-to-top-mobile ${isVisible}`} expand="lg" >
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
                            <img src="https://www.lacasadeel.net/wp-content/uploads/2016/01/Marvel-y-DC2.jpg" alt="img logo" className="nav-logo-desktop" />
                        </a>
                    </div>
                    <NavUser
                        tokenLocal={tokenLocal}
                        splitLocation={splitLocation}
                        user={user}
                        logout={logout}
                        favorites={favorites}
                        cart={cart}
                    />

                </div>
            </Container>
        </nav>
    )
}
