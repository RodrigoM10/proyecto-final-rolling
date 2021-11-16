import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { BsCart, BsCartFill } from 'react-icons/bs'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './navbarMain.css'


export const NavMiddle = ({ splitLocation, favorites, cart }) => {
    const [visible, setVisible] = useState(false);
    
    const [isVisible, setIsVisible] = useState('');
    console.log("🚀 ~ file: NavMiddle.jsx ~ line 13 ~ NavMiddle ~ isVisible", isVisible)
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

    const linkShow = () => {
        if (window.scrollY < 150) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', linkShow)
        return () => {
            window.removeEventListener('scroll', linkShow)
        }
    }, [visible])


    return (
        <nav className={`bg-blue fix-to-top py-1 ${isVisible}`}>
            <Container className="pb-2 d-none d-md-block border-0 ">
                <div className="d-flex align-items-center justify-content-center w-100 navbar-links">
                    {visible &&
                        <li className="p-2 mx-3" >
                            <Nav.Link as={NavLink} exact to="/"   activeClassName="link-active">HOME</Nav.Link>
                        </li>
                    }
                    <li className="p-2 mx-3" >
                        <Nav.Link as={NavLink} to="/store" activeClassName="link-active">NUESTROS VINOS</Nav.Link>
                    </li>
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/contact" activeClassName="link-active">CONTACTO</Nav.Link>
                    </li>
                    <li className="p-2 mx-3">
                        <Nav.Link as={NavLink} to="/about" activeClassName="link-active" >HISTORIA</Nav.Link>
                    </li>
                    {visible &&
                        <div className="pb-2 position-end">
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
                    }
                </div>
            </Container>
        </nav>
    )
}
