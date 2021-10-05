import React from 'react'
import "./stylesPages/login.css";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

function Login() {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={8} md={6} className="mx-auto my-5">
                    <Card className="d-flex justify-content-center form-login ">
                        <Card.Body>
                            <div className="d-flex flex-column align-items-center">
                            <h3 className="header">Welcome to Wine Vibes</h3>
                            <p className="subHeader">Only for Members</p>
                            </div>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address *"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password *" />
                            </FloatingLabel>
                            <Row>
                                <Button type="submit" className="mx-auto mt-4">
                                    Iniciar Sesión
                                </Button>
                            </Row>
                            <Row>
                                <Button className="mx-auto btn-secondary mt-4">
                                    Cerrar Sesion
                                </Button>
                            </Row>
                            <Row>
                               ¿Aun No tienes cuenta? 
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default Login