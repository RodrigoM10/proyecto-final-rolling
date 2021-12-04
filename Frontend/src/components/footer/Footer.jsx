import React from 'react'
import { useLocation } from 'react-router-dom';
import "./footer.css";

import FooterAdmin from './FooterAdmin';
// react-icons
import { FaArrowUp, FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

export const Footer = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            {splitLocation[1] !== "adminBoard" && splitLocation[1] !== "messagesList" && splitLocation[1] !== "userList" && splitLocation[1] !== "profileAdmin" && splitLocation[1] !== "salesList" &&
                <div className="mt-auto">
                    <div className="footer">
                        <div className="row text-center align-items-center">
                            <div className="col-12  my-4">
                                <div className="mb-2 social-icon">
                                    <h5>SEGUINOS EN NUESTRAS REDES</h5>
                                    <a href="." target="blank">
                                        <FaFacebookSquare />
                                    </a>
                                    <a href="." target="blank">
                                        <FaTwitterSquare />
                                    </a>
                                    <a href="." target="blank">
                                        <FaInstagramSquare />
                                    </a>
                                    <a href="." target="blank">
                                        <FaYoutubeSquare />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row text-center align-items-center link-effect">
                            <div className="col-12 col-lg-3 col-md-6 my-4">
                                <h5>DC COMICS</h5>
                                <div className="links mb-2">
                                    <a href="." >Personajes</a><br />
                                    <a href="." >Comics</a><br />
                                    <a href="." >Peliculas</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-md-6 my-4">
                                <h5>MARVEL</h5>
                                <div className="links">
                                    <a href="."  >Personajes</a><br />
                                    <a href="."  >Comics</a><br />
                                    <a href="."  >Peliculas</a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-md-6 my-4">
                                <h5>TIENDA</h5>
                                <div className="links mb-2">
                                    <a href="."  >Coleccionables</a><br />
                                    <a href="."  >Comics</a><br />
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 col-md-6 my-4">
                                <h5>SOPORTE</h5>
                                <div className="links">
                                    <a href="."  >Contacto</a><br />
                                    <a href="."  >Avisos Legales</a><br />
                                    <a href="."  >Cookies</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between footer2">
                        <div>
                            <p>© 2021 Tienda DC/MARVEL</p>
                        </div>
                        <div>
                            <p>Universo DC/MARVEL</p>
                        </div>
                        <div>
                            <button className="volverArriba" onClick={scrollToTop}><FaArrowUp /></button>
                        </div>
                    </div>
                </div>
            }
            {splitLocation[1] === "adminBoard" && <FooterAdmin />}
            {splitLocation[1] === "messagesList" && <FooterAdmin />}
            {splitLocation[1] === "userList" && <FooterAdmin />}
            {splitLocation[1] === "profileAdmin" && <FooterAdmin />}
            {splitLocation[1] === "salesList" && <FooterAdmin />}
        </>
    )
}
