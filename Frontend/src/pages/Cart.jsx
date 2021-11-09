//snippet rfc

import React, { useState } from 'react'
import { Accordion, Button, Card, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { CardCarrito } from '../components/cardCart/CardCarrito';
import { useHistory } from 'react-router-dom';
import { FormBuy } from '../components/formBuy/FormBuy';
import { CardDataCompra } from '../components/cardCart/CardDataCompra';

function Cart({ cart, setCart, user }) {
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

    const mapCompra = cart.map((productCart, i) => (<CardDataCompra
        key={i} productCart={productCart}
    />
    ));

    return (
        <Container>
            <h2 className="title-style my-2">Tu carrito</h2>
            <div>
                {cart.length !==0 &&  
                <div className="d-flex justify-content-end align-items-center">
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
                }
                <div className="row justify-content-center align-items-center">
                    <div className="text-center" >
                        {cart.length === 0 ?
                            <Card className="no-results-card text-center text-dark-50 p-5 m-5">
                                <Card.Title>Tu carrito esta vacio</Card.Title>
                            </Card>
                            :
                            <div className="d-flex justify-content-center">
                                <div className="col-12 col-lg-9 m-2">
                                    {mapCarrito}
                                </div>
                            </div>
                        }
                    </div>
                    <div className="m-2 text-center col-12 col-lg-3" style={{ width: '18rem' }}>
                        <div>
                            <h2>TOTAL: ${total.toFixed(2)} </h2>
                            <Card.Text>
                                <Button onClick={continueToBuy} className="btn-admin my-2" aria-label="Close" variant="secondary">CONTINUA COMPRANDO</Button>
                            </Card.Text>
                        </div>
                    </div>
                </div>
            </div>
            {/* PAGAR PRODUCTO ACORDION */}
            {cart.length !== 0 &&
                <Accordion className="mb-3">
                    <Accordion.Item className="accordion-buy" eventKey="0">
                        <Accordion.Header>
                            Proceder a la compra
                        </Accordion.Header>
                        <Accordion.Body className="d-flex">
                            <div className="row row-cols-1 row-cols-lg-2 w-100">
                                {/* LISTADO DE DATOS DE COMPRA */}
                                <div className="d-flex flex-column align-items-between datos-compra-div">
                                    <h3 className="m-2 text-center ">DATOS DE LA COMPRA</h3>
                                    <div className="row justify-content-md-center align-items-md-center">
                                        {mapCompra}
                                    </div>
                                    <div className="m-2 d-flex justify-content-around pt-3 border-subtotal-total">
                                        <h5>SubTotal:</h5>
                                        <h5>${total.toFixed(2)} </h5>
                                    </div>
                                    <div className="m-2 d-flex justify-content-around">
                                        <h5>Envio:</h5>
                                        <h5> $5 </h5>
                                    </div>
                                    <div className="m-2 d-flex justify-content-around pt-5 border-subtotal-total">
                                        <h3>Total $ </h3>
                                        <h3>{(5 + total).toFixed(2)}</h3>
                                    </div>
                                </div>
                                <div>
                                    <FormBuy user={user} cart={cart}/>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }

        </Container>
    )
}

export default Cart