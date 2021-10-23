import React from 'react'
import { Container} from 'react-bootstrap'
import { FormContact } from '../components/formContact/FormContact'
import {  FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';


function Register() {
    return (
        <div className="container-contact" >
        <Container>
            <section className="row  row-cols-1 row-cols-lg-2">
                <div className="text-welcome-register d-flex flex-column aling-items-center align-items-md-start ">
                    <h1>Contacta con Rolling Wine</h1>
                    <h5 className="text-center text-md-start px-5 px-md-0 pe-md-5">Mandanos un mensaje directo de nuestra page, llenando el formulario con tu email y un mensaje. Si es posible selecciona una de las opciones para saber que es lo que mas buscan nuestros clientes</h5>
                    <h5 className="text-center text-md-start px-5 px-md-0 pe-md-5 mb-5">Si ya probaste algunos de nuestros vinos y la atencion que brindamos, usa este espacio para dejarnos una reseña! Eso nos ayuda muchisimo... Gracias</h5>
                    <span className="text-center text-md-start px-5 px-md-0 pe-md-5 ">Tambien puedes contactarnos a traves de nuestro email contactwine@winevibes.com o con nuestro cel de la empresa +3816807710.</span>
                    <div className="my-2 social-icon">
                            <h5>Nunca te olvides de nuestras redes</h5>
                            <a href="." target="blank">
                                <FaFacebookSquare  />
                            </a>
                            <a href="." target="blank">
                                <FaTwitterSquare />
                            </a>
                            <a href="." target="blank">
                                <FaInstagramSquare />
                            </a>
                        </div>
                </div>
                <Container className="m-auto">
                  <FormContact />
                </Container>
            </section>
        </Container>
        </div>
    )
}

export default Register