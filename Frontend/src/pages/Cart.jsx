//snippet rfc

import React, { useState } from 'react'
import { Accordion, Button, Card, Col, Container, Form, InputGroup, Nav, OverlayTrigger, Row, Spinner, Tooltip } from 'react-bootstrap';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { CardCarrito } from '../components/cardCart/CardCarrito';
import { Link, useHistory } from 'react-router-dom';
import { FormBuy } from '../components/formBuy/FormBuy';


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
                        </div>
                    </div>
                </div>
            </Container>

            {/* PAGAR PRODUCTO ACORDION */}
            <Accordion className="mb-3">
                <Accordion.Item className="accordion-buy" eventKey="0">
                    <Accordion.Header>
                        Proceder a la compra
                    </Accordion.Header>
                    <Accordion.Body className="d-flex">
                        <div className="row row-cols-1 row-cols-lg-2 w-100">
                            <div className="d-flex justify-content-center align-items-center">DATOS DE LA COMPRA</div>
                            <div>
                                <FormBuy />
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Cart