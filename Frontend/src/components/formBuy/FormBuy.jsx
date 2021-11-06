import React from 'react'
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './formBuy.css'

export const FormBuy = () => {

    return (
        <Form>
            <div className="row row-cols-1">
                <Link className="my-3 text-decoration-none text-secondary text-center" to="/login">
                    ¿Ya tiene una cuenta? Iniciar sesión
                </Link>
                <h5 className="mt-2">Informacion del Contacto</h5>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel controlId="floatingSelect" label="Email">
                    <Form.Control type="email" />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Nacimiento</Form.Label> */}
                <h5 className="mt-2">Nacimiento</h5>
                <Form.Control type="date" placeholder="name@example.com" />
                <Form.Text className="text-muted mb-1">
                    Necesitamos este dato para venderte alcohol
                </Form.Text>
            </Form.Group>

            <h5 className="mt-2">Dirección de envio</h5>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <FloatingLabel controlId="floatingSelect" label="Nombre">
                        <Form.Control type="text" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <FloatingLabel controlId="floatingSelect" label="Apellido">
                        <Form.Control type="text" />
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <FloatingLabel controlId="floatingSelect" label="Dirección">
                    <Form.Control type="text" />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
                <FloatingLabel controlId="floatingSelect" label="Piso, departamento ...">
                    <Form.Control type="email" />
                </FloatingLabel>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <FloatingLabel controlId="floatingSelect" label="Ciudad">
                        <Form.Control type="text" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <FloatingLabel controlId="floatingSelect" label="Provincia">
                        <Form.Control type="text" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mt-2 mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Instrucciones de entrega</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
