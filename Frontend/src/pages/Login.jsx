import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardsLogin } from '../components/cardsLogin/CardsLogin';
import { FormLogin } from '../components/formLogin/FormLogin';

function Login() {

    return (
        <Container>
            <Row>
                <Col className="col-12 col-lg-8 d-flex flex-column justify-content-between mx-auto my-5">
                    <FormLogin />
                </Col>
                <Col className="col-12 col-lg-4 mx-auto my-5">
                    <CardsLogin />
                </Col>
            </Row>
        </Container >
    )
}

export default Login