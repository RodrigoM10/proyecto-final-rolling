import React from 'react'
import { Carousel } from 'react-bootstrap'

export const HistoriaCards = () => {
    return (
        <div className="row gx-3 gy-2 p-3 mb-2 historia-style">
            <h1 className="text-center">¿Que hacemos?</h1>
            <div className="col-12 col-xxl-6 p-3">
                <h4 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi architecto aliquid, inventore ratione temporibus laboriosam at, maiores vero quisquam dolorum nesciunt possimus numquam ullam quam vitae amet ipsa velit. Totam.</h4>
                <h4 style={{ color: '#b59062' }} ><b>¿Quienes somos en realidad?</b></h4>
                <h4 className="mb-3">Somos Rodri, Alvaro y Nico 😉... Tres alumnos de la escuela Rolling Code y este es nuestro proyecto final. Fue un hermoso cursado y estamos agradecidos de Rolling porque nos dio las herramientas y nos marco el camino para ser un <b>"FULLSTACK DEV"</b> con todas las letras! 😎</h4>
                <h5> <b>MUCHAS GRACIAS JJ y Rick por ser nuestros mentores 😄</b></h5>
            </div>
            <div class="col-12 col-xxl-6 p-3">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://blog.fuertehoteles.com/wp-content/uploads/2017/08/vino-grazalema-2.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://maridamalaga.com/wp-content/uploads/2020/11/malaga-virgen.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://blog.fuertehoteles.com/wp-content/uploads/2017/05/bodega-alvaro-domecq.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
