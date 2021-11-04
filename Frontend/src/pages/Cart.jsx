//snippet rfc

import React, { useState } from 'react'
import { Button, Card, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { CardCarrito } from '../components/cardCart/CardCarrito';

function Cart({ cart, setCart }) {

    // console.log("🚀 ~ file: Cart.jsx ~ line 11 ~ Cart ~ subTotal", subTotal)
    // se usa el metodo "reduce" - con la particularidad de reducir conjunto de datos en uno solo 
    let total = cart.reduce((total,{producto, cantidad }) => total + producto * cantidad, 0);

    // mapeo de los productos que estan en el carrito 
    const mapCarrito = cart?.map((productCart, i) => (<CardCarrito
     key={i} productCart={productCart} 
     cart={cart} setCart={setCart} 
     />
    ));
    //fn limpia productos del carrito
    const clearCart = () => {
        setCart([]);
      };

    return (
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
                                         <button className="clean-cart my-2" onClick={clearCart}><MdOutlineCleaningServices/></button>
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
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button className="responsive-navbar-button">Ir a pagar</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Cart