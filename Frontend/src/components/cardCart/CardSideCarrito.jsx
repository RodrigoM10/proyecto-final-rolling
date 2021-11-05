import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md';

export const CardSideCarrito = ({ productCart, cart, setCart, changeCantidad }) => {

    const removeToCart = () => {
        const filterCart = cart.filter((prodCart) => prodCart.producto._id !== productCart.producto._id);
        setCart(filterCart);
    };

    const oneMore = () => {
        changeCantidad(productCart.producto._id, productCart.cantidad + 1);
    };

    const oneLess = () => {
        changeCantidad(productCart.producto._id, productCart.cantidad - 1);
    };

    const isCartZero = productCart.cantidad <= 1;

    return (
        <div>
            <div className="row justify-content-center align-content-center">
                <Card.Img className="m-2 col-12 col-lg-2"
                    variant="top"
                    style={{ width: '8rem' }}
                    src={productCart.producto.image}
                />
                <Card.Text className="text-center m-2 col-12 col-lg-2" >
                    {productCart.producto.name}
                    <h6>${productCart.producto.price}</h6>
                </Card.Text>
                <div className="m-2 col-12 col-lg-2">
                    <button
                        onClick={oneLess}
                        disabled={isCartZero}
                        className={isCartZero ? 'delete-cartItem-btn-modal' : 'agregar-sacar-btn-modal'}>-</button>
                    <h4>{productCart.cantidad}</h4>
                    <button onClick={oneMore} className="agregar-sacar-btn-modal">+</button>
                </div>
                <div className="m-2 col-12 col-lg-2">
                    <button className="btn-remove-to-cart pb-1 mb-2" onClick={removeToCart} >
                        <MdOutlineClose />
                    </button>
                </div>
                <hr />
            </div>
        </div>
    )
}
