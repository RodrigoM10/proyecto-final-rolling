import React from 'react'
import "./footer.css";

export const FooterMain = () => {
    return (
        <>
            <div className="bg-dark  footer">
                <div className="row text-center align-items-center">
                    <div className="col-12  my-4">
                        <div className="mb-2">
                            <h5>SEGUINOS EN NUESTRAS REDES</h5>
                            <a href="." target="blank"><i
                                className="fab fa-facebook-square social-icon"></i></a>
                            <a href="." target="blank"><i
                                className="fab fa-instagram-square social-icon"></i></a>
                                <a href="." target="blank"><i
                                className="fab fa-twitter-square social-icon"></i></a>
                        </div>
                    </div>
                    <hr />
                    <div className="col-12 col-lg-3 my-4">
                        <h5>CONCATENOS</h5>
                        <div className="links mb-2">
                            <a href="." target="blank" ><i class="far fa-envelope"></i>contactwine@winevibes.com</a><br />
                            <a href="https://wa.me/c/34635790277" target="blank" ><i class="fab fa-whatsapp"></i>+3816807710</a>
                        </div>
                    </div>
                    <div className="links col-12 col-lg-3 my-4">
                        <h5>BODEGAS</h5>
                        <div className="links mb-2">
                            <a href="." target="blank" ><i class="fas fa-wine-bottle"></i>Teo Calderon</a><br />
                            <a href="." target="blank" ><i class="fas fa-wine-bottle"></i>Don omar</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3  my-4">
                        <h5>EVENTOS</h5>
                        <div className="links">
                            <a href="." target="blank" ><i class="fas fa-wine-bottle"></i>Teo Calderon</a><br />
                            <a href="." target="blank" ><i class="fas fa-wine-bottle"></i>Don omar</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3  my-4">
                        <h5>SOPORTE</h5>
                        <div className="links">
                            <a href="." target="blank" ><i class="fas fa-wine-bottle"></i>Teo Calderon</a><br />
                            <a href="." target="blank" ><i class="fas fa-wine-bottle"></i>Don omar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between footer2">
                <div>
                    <p>© 2021 The Wine Vibes All rights reserved</p>
                </div>
                <div>
                    <p>Keep Calm and drink Wine</p>
                </div>
                <div>
                    <a href="." target="blank" className="volverArriba"><i class="fas fa-arrow-up"></i></a>
                </div>
            </div>
        </>

    )
}
