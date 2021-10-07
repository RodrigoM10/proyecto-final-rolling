import React from 'react'
import { Container} from 'react-bootstrap'
import { FormRegister } from '../components/formRegister/FormRegister'

function Register() {
    return (
        <div className="container-register">
        <Container >
            <section className="row  row-cols-1 row-cols-lg-2">
                <div className="text-welcome-register d-flex flex-column aling-items-center align-items-md-start ">
                    <h1>Bienvenido a Rolling Wine</h1>
                    <p className="text-center text-md-start px-5 px-md-0 pe-md-5">Únete gratis a The Wine Collective y sé el primero en enterarte de nuestras mejores ofertas y nuevos lanzamientos. Obtendrá acceso exclusivo a las mejores ofertas de vinos de Argentina, prioridad para comprar vinos raros y de lanzamiento limitado, competiciones y visitas al bodegon únicas.</p>
                    <h5 className="text-center text-md-start px-5 px-md-0 pe-md-5 ">REGÍSTRESE AHORA GRATIS y sea recompensado por cada compra a través de nuestro Programa de Recompensas de Vino.</h5>
                </div>
                <Container>
                  <FormRegister />
                </Container>
            </section>
        </Container>
        </div>
    )
}

export default Register