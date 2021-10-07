import React from 'react'
import { Container} from 'react-bootstrap'
import { FormRegister } from '../components/formRegister/FormRegister'

function Register() {
    return (
        <div className="container-register">
        <Container >
            <section className="row  row-cols-1 row-cols-lg-2">
                <div className="text-welcome-register">
                    <h1>Bienvenido a Rolling Wine</h1>
                    <p>Únete gratis a The Wine Collective y sé el primero en enterarte de nuestras mejores ofertas y nuevos lanzamientos. Obtendrá acceso exclusivo a las mejores ofertas de vinos de Argentina, prioridad para comprar vinos raros y de lanzamiento limitado, competiciones y visitas al bodegon únicas.</p>
                </div>
                <div>
                  <FormRegister />
                </div>
            </section>
        </Container>
        </div>
    )
}

export default Register