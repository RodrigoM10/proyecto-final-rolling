import React from 'react'
import { Card } from 'react-bootstrap'


export const CardDataCompra = ({ productCart }) => {


    return (
        <div className="row align-items-center justify-content-around">
            <Card.Img className="m-2 col-2 img-buy-data"
                variant="left"
                style={{ width: '5rem' }}
                src={productCart.producto.image}
            />
            <div className="col-8 row align-items-center justify-content-center p-0 ">
                <span className="text-center m-2 col-12 col-sm-10">{productCart.producto.name}</span>
                <span className="text-center p-0 m-2 col-12 col-sm-2 ">$ {(productCart.producto.price * productCart.cantidad).toFixed(2)}</span>
            </div>
        </div>
        // </div>

    )
}
