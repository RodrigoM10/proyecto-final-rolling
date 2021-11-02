//snippet rfc

import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { CardCarrito } from '../components/cardCart/CardCarrito';

function Cart({ cart }) {
    const mapCarrito = cart?.map((producto, i) => (<CardCarrito key={i} producto={producto} cart={cart} />
    ));
    return (
        <Container>
            <h1 className="text-center my-5">Tu carrito</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-9 m-2">
                    {mapCarrito}
                </div>
                <div className="m-2 text-center col-12 col-lg-3" style={{ width: '18rem' }}>
                    <div>
                        <h2>TOTAL: </h2>
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