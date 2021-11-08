import axios from 'axios'
import React, { useState } from 'react'
import { Accordion, Button, Card, Col, FloatingLabel, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import './formBuy.css'

export const FormBuy = () => {

    const [input, setInput] = useState({
        buyerEmail: '', buyerDate: '', buyerName: '', buyerLastName: '', buyerAddress1: '', buyerAddress2: '', buyerCity: '', buyerState: '', buyerZip: '', buyerShippingInstructions: '', buyerCardNumber: '', buyerCardName: '',buyerCardDate: '',buyerCardCode: ''});

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/ventas', input);
            swal({
                title: "Compra Exitosa !",
                icon: "success",
            });
            localStorage.removeItem('cart');
            window.location.href = '/store';
        } catch (error) {
            console.error(error);
        }
        e.target.reset();
    }
    return (
        <Form onSubmit={handleSubmit}>
            <div className="row row-cols-1">
                <Link className="my-3 text-decoration-none text-secondary text-center" to="/login">
                    ¿Ya tiene una cuenta? Iniciar sesión
                </Link>
                <h5 className="mt-2">Informacion del Contacto</h5>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel controlId="floatingSelect" label="Email">
                    <Form.Control type="email"
                        name="buyerEmail"
                        onChange={(e) => handleChange(e)} />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Nacimiento</Form.Label> */}
                <h5 className="mt-2">Nacimiento</h5>
                <Form.Control type="date"
                    name="buyerDate"
                    onChange={(e) => handleChange(e)} />
                <Form.Text className="text-muted mb-1">
                    Necesitamos este dato para venderte alcohol
                </Form.Text>
            </Form.Group>

            <h5 className="mt-2">Dirección de envio</h5>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <FloatingLabel controlId="floatingSelect" label="Nombre">
                        <Form.Control type="text"
                            name="buyerName"
                            onChange={(e) => handleChange(e)}
                            required />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <FloatingLabel controlId="floatingSelect" label="Apellido">
                        <Form.Control type="text"
                            name="buyerLastName"
                            onChange={(e) => handleChange(e)}
                            required />
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <FloatingLabel controlId="floatingSelect" label="Dirección">
                    <Form.Control type="text"
                        name="buyerAddress1"
                        onChange={(e) => handleChange(e)}
                        required />
                </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
                <FloatingLabel controlId="floatingSelect" label="Piso, departamento ...">
                    <Form.Control type="text"
                        name="buyerAddress2"
                        onChange={(e) => handleChange(e)}
                        required />
                </FloatingLabel>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <FloatingLabel controlId="floatingSelect" label="Ciudad">
                        <Form.Control type="text"
                            name="buyerCity"
                            onChange={(e) => handleChange(e)}
                            required />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <FloatingLabel controlId="floatingSelect" label="Provincia">
                        <Form.Control type="text"
                            name="buyerState"
                            onChange={(e) => handleChange(e)}
                            required />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <FloatingLabel controlId="floatingSelect" label="Codigo Postal">
                        <Form.Control type="text" maxLength="4"
                            name="buyerZip"
                            onChange={(e) => handleChange(e)}
                            required />
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Form.Group className="mt-2 mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Instrucciones de entrega</Form.Label>
                <Form.Control as="textarea"
                    name="buyerShippingInstructions"
                    onChange={(e) => handleChange(e)}
                    rows={3} />
            </Form.Group>
            {/* Continuar Compra */}
            <Accordion className="mb-2">
                <Accordion.Item className="accordion-buy" eventKey="0">
                    <Accordion.Header>
                        Continuar
                    </Accordion.Header>
                    <Accordion.Body>
                        <h5>Pago</h5>
                        <Form.Text className="text-muted mb-1">
                            Todas las transacciones son seguras y encriptadas.
                        </Form.Text>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel controlId="floatingSelect" label="Numero de Tarjeta">
                                <Form.Control type="text" minLength="16" maxLength="19"
                                    name="buyerCardNumber"
                                    onChange={(e) => handleChange(e)}
                                    required />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel controlId="floatingSelect" label="Nombre Tarjeta">
                                <Form.Control type="text"
                                    name="buyerCardName"
                                    onChange={(e) => handleChange(e)}
                                    required />
                            </FloatingLabel>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <FloatingLabel controlId="floatingSelect" label="Vencimiento (MM/YY)">
                                    <Form.Control type="text" minLength="5" maxLength="5"
                                        name="buyerCardDate"
                                        onChange={(e) => handleChange(e)}
                                        required />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <FloatingLabel controlId="floatingSelect" label="Codigo de seguridad">
                                    <Form.Control type="text" maxLength="3" minLength="3"
                                        name="buyerCardCode"
                                        onChange={(e) => handleChange(e)}
                                        required />
                                </FloatingLabel>
                            </Form.Group>
                        </Row>
                    {/* BOTON SUBMIT PARA COMPLETAR EL FORMULARIO*/}
                    <button className="btn-general-style" type="submit">
                        Comprar
                    </button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Form>
    )
}
