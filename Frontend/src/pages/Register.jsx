import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function Register() {
    return (
        <Container>
            <section className="row row-cols-1 row-cols-lg-2">
                <div>
                    Bienvenido a Vinos ROLLINGOTES
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                            <label> Nombre </label>
                            <input type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                            <label> Apellido </label>
                            <input type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                            <label> Email </label>
                            <input type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                            <label> Contraseña </label>
                            <input type="password" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                            <label> Fecha de Nacimiento </label>
                            <input type="number" placeHolder="DD" id="birth-day" min="1" max="31" maxLength="2" required />
                            <input type="number" placeHolder="MM" id="birth-day" min="1" max="12" maxLength="2" required />
                            <input type="number" placeHolder="AAAA" id="birth-day" min="1" max="31" minLength="4" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </section>
        </Container>
    )
}

export default Register