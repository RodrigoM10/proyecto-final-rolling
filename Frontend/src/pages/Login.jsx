import React from 'react'
import "./stylesPages/login.css";
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

function Login() {
    return (
        <Container>
            <Row>
                <Col className="col-12 col-lg-6 d-flex flex-column justify-content-between mx-auto my-5">
                    <Card className="d-flex justify-content-center form-login">
                        <Card.Body>
                            <div className="d-flex flex-column align-items-center">
                                <h3 className="header">Welcome to Wine Vibes</h3>
                                <p className="subHeader">Only for Members</p>
                            </div>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                            <Row>
                                <Button type="submit" className="mx-auto mt-4">
                                    Iniciar Sesión
                                </Button>
                                <Button className="mx-auto btn mt-4">
                                    Inicia Sesion con Facebook
                                </Button>
                                <div>
                                    <p>¿Aun no tienes cuenta?</p>
                                    <a href=".">Crea una cuenta</a>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-12 col-lg-4 d-flex flex-column justify-content-between mx-auto my-5 ">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default Login