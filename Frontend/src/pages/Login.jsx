import React from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'

function Login() {
    return (
        <Container>
        <Row>
            <Col xs={12} sm={8} md={6} className="mx-auto my-5">
                <Card className="border">
                    <Card.Header className="bg-info">
                        <h4 className="text-white">MeMes</h4>
                    </Card.Header>
                    <Card.Body>
                        <Form noValidate>
                            <Form.Group controlId="validationCustom02">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationCustomUsername">
                                <Form.Label>Password</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        minLength="6"
                                        name="password"
                                        type="password"
                                        placeholder="****"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">s
                                        Password is required!
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
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
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default Login