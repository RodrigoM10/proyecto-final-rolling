import React from 'react'
import { Card } from 'react-bootstrap'


export const CardDataCompra = ({ productCart }) => {


    return (
        <div className="d-flex justify-content-md-center align-items-center" >
            <Card.Img className="m-2 col-12 col-sm-4 img-buy-data"
                variant="left"
                style={{ width: '5rem' }}
                src={productCart.producto.image}
            />
            <div className="m-2 col-6 col-sm-4">
                <p className="mb-0" >{productCart.producto.name}</p>
            </div>
            <div className="m-2 col-6 col-sm-4">
                <p className="mb-0">$ {(productCart.producto.price * productCart.cantidad).toFixed(2)}</p>
            </div>
        </div>

    )
}
