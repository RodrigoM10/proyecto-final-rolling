import React from 'react'
import { Card } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md';

export const CardSideCarrito = ({ productCart, cart, setCart }) => {

    const removeToCart = () => {
        const filterCart = cart.filter((prodCart) => prodCart.producto._id !== productCart.producto._id);
        setCart(filterCart);
    };

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
                    <button className="agregar-sacar-btn">-</button>
                    <h4 className="m-2">{productCart.cantidad}</h4>
                    <button className="agregar-sacar-btn">+</button>
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
