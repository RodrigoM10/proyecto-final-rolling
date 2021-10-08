import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FormLogin } from '../components/formLogin/FormLogin';

function Login() {
    return (
        <Container>
            <Row>
                <FormLogin />
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