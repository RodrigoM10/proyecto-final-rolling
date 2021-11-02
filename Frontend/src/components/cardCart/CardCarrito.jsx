import React from 'react'
import { Card } from 'react-bootstrap'
import './cardCarrito.css'

export const CardCarrito = ({cart}) => {
    return (
        <>
            <div className="row justify-content-center align-content-center">
                <Card.Img className="m-2 col-12 col-lg-2"
                    variant="top"
                    style={{ width: '10rem' }}
                    src={cart[0]?.producto.image}
                />
                <Card.Text className="text-center m-2 col-12 col-lg-2" >
                    {cart[0]?.producto.name}
                </Card.Text>
                <Card.Text className="text-center m-2 col-12 col-lg-2">
                    <h6>Precio Unidad: {cart[0]?.producto.price}</h6>
                </Card.Text>
                <div className="d-flex justify-content-center align-content-center m-2 col-12 col-lg-2">
                    <button className="agregar-sacar-btn">-</button>
                    <h4 className="m-2">1</h4>
                    <button className="agregar-sacar-btn">+</button>
                </div>
                <Card.Text className="text-center m-2 col-12 col-lg-2">
                    <h6>Sub total: {cart[0]?.producto.price}</h6>
                </Card.Text>
                <hr />
            </div>
    </>
    )
}
