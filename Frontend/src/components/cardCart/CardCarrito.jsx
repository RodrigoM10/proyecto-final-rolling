import React from 'react'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md';
import './cardCarrito.css'

export const CardCarrito = ({ producto, cart, setCart, changeCantidad }) => {

    const removeToCart = () => {
        const filterCart = cart.filter((cartProduct) => cartProduct.producto._id !== producto.producto._id);
        setCart(filterCart);
      };

      const onChangeSubTotal = (e) => {
        changeCantidad(producto.id, e.target.value);
    };

    return (
        <>
            <div className="d-flex justify-content-end">
            <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
              (props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Eliminar
                </Tooltip>)
            }
          >
            <button className="btn-remove-to-cart pb-1 mb-2" onClick={removeToCart}>
              <MdOutlineClose />
            </button>
          </OverlayTrigger>
            </div>
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
                    <button onClick={onChangeSubTotal} className="agregar-sacar-btn">-</button>
                    <h4 className="m-2">1</h4>
                    <button onClick={onChangeSubTotal} className="agregar-sacar-btn">+</button>
                </div>
                <Card.Text className="text-center m-2 col-12 col-lg-2">
                    <h6>Sub total: {cart[0]?.producto.price}</h6>
                </Card.Text>
                <hr />
            </div>
        </>
    )
}
