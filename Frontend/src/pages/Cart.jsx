//snippet rfc

import React from 'react'
import { Accordion, Button, Card, Col, Container, Form, InputGroup, OverlayTrigger, Row, Spinner, Tooltip } from 'react-bootstrap';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { CardCarrito } from '../components/cardCart/CardCarrito';
import { useHistory } from 'react-router-dom';


function Cart({ cart, setCart }) {
    const history = useHistory();

    const scrollToTop = () => {
        window.scrollTo(0, 250);
    };

    const changeCantidad = (_id, cantidad) => {
        const updateCart = cart.map((productCart) => {
            if (productCart.producto._id === _id) {
                return { ...productCart, cantidad };
            }
            return productCart
        });
        setCart(updateCart);
    };

    // se usa el metodo "reduce" - con la particularidad de reducir conjunto de datos en uno solo 
    let total = cart.reduce((total, { producto, cantidad }) => total + producto.price * cantidad, 0);

    // mapeo de los productos que estan en el carrito 
    const mapCarrito = cart.map((productCart, i) => (<CardCarrito
        key={i} productCart={productCart}
        cart={cart} setCart={setCart}
        changeCantidad={changeCantidad}
    />
    ));
    //fn limpia productos del carrito
    const clearCart = () => {
        setCart([]);
    };

    const continueToBuy = () => {
        history.push('/store');
        scrollToTop(0, 250);
    }

    return (
        <>
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="title-style my-2">Tu carrito</h2>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            (props) => (
                                <Tooltip id="button-tooltip" {...props}>
                                    Limpiar carrito
                                </Tooltip>)
                        }
                    >
                        <button className="clean-cart my-2" onClick={clearCart}><MdOutlineCleaningServices /></button>
                    </OverlayTrigger>
                </div>
                <div className="row justify-content-center">
                    {cart.length === 0 ?
                        <Card className="no-results-card text-center text-dark-50 p-5 m-5">
                            <Card.Title>Tu carrito esta vacio</Card.Title>
                        </Card>
                        :
                        <div>
                            <div className="col-12 col-lg-9 m-2">
                                {mapCarrito}
                            </div>
                        </div>
                    }
                    <div className="m-2 text-center col-12 col-lg-3" style={{ width: '18rem' }}>
                        <div>
                            <h2>TOTAL: ${total.toFixed(2)} </h2>
                            <Card.Text>
                                <Button onClick={continueToBuy} className="btn-admin my-2" aria-label="Close" variant="secondary">CONTINUA COMPRANDO</Button>
                            </Card.Text>
                            <Button className="responsive-cart-button">Ir a pagar</Button>
                        </div>
                    </div>
                </div>
            </Container>

            {/* PAGAR PRODUCTO ACORDION */}
            <Accordion>
                <Accordion.Item className="carga-Productos-Accordion" eventKey="0">
                    <Accordion.Header>
                        <h3>CARGAR PRODUCTOS</h3>
                    </Accordion.Header>
                    <Accordion.Body className="d-flex">
                        <Form
                            noValidate
                            // validated={validated}
                            // onSubmit={handleSubmit}
                            className="formulario-estilo card mt-5 p-5 mx-auto border-0"
                            style={{ width: "auto", background: "beige" }}
                        >

                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="name">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            name="name"
                                            // onChange={(e) => handleChange(e)}
                                            required
                                            type="text"
                                            placeholder="Nombre"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="image">
                                        <Form.Label>Imagen</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                name="image"
                                                // onChange={(e) => handleChange(e)}
                                                type="text"
                                                placeholder="http://productos.jpg"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Imagen requerida!
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="description">
                                        <Form.Label>Descripcion</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                name="description"
                                                // onChange={(e) => handleChange(e)}
                                                type="text"
                                                placeholder=""
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="background">
                                        <Form.Label>Imagen detalle</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                name="background"
                                                // onChange={(e) => handleChange(e)}
                                                type="text"
                                                placeholder="http://productos.jpg"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Imagen requerida!
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="category">
                                        <Form.Label>Categoria</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                name="category"
                                                // onChange={(e) => handleChange(e)}
                                                type="text"
                                                placeholder=""
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <Form.Group controlId="price">
                                        <Form.Label>Precio</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                name="price"
                                                // onChange={(e) => handleChange(e)}
                                                type="text"
                                                placeholder="$"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="discount">
                                <Form.Label>Descuento</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        // name="discount"
                                        // onChange={(e) => handleChange(e)}
                                        type="text"
                                        placeholder=""
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Row>
                                <Button
                                    type="submit"
                                    className="boton-cargar mx-auto mt-5"
                                    // disabled={isLoading}
                                >
                                    Agregar Producto
                                    {/* {isLoading && (
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    )} */}
                                </Button>
                            </Row>
                        </Form>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Cart