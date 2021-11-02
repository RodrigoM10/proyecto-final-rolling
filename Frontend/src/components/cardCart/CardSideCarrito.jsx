import React from 'react'
import { Card } from 'react-bootstrap'

export const CardSideCarrito = ({ cart }) => {
    return (
        <div>
            <div className="row justify-content-center align-content-center">
                <Card.Img className="m-2 col-12 col-lg-2"
                    variant="top"
                    style={{ width: '8rem' }}
                    src={cart[0]?.producto.image}
                />
                <Card.Text className="text-center m-2 col-12 col-lg-2" >
                    {cart[0]?.producto.name}
                    <h6>${cart[0]?.producto.price}</h6>
                </Card.Text>
                <div className="m-2 col-12 col-lg-2">
                    <button className="agregar-sacar-btn">-</button>
                    <h4 className="m-2">1</h4>
                    <button className="agregar-sacar-btn">+</button>
                </div>
                <div className="m-2 col-12 col-lg-2">
                    <button className="boton-remover-canvas">X</button>
                </div>
                <hr />
            </div>
        </div>
    )
}
