import React from 'react'
import { Container} from 'react-bootstrap'
import { FormRegister } from '../components/formRegister/FormRegister'

function Register() {
    return (
        <div className="container-register">
        <Container >
            <section className="row  row-cols-1 row-cols-lg-2">
                <div>
                    Bienvenido a Vinos ROLLINGOTES
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