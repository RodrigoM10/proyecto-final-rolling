
import { useEffect, useState } from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md';
import './cardCarrito.css'

export const CardCarrito = ({ productCart, cart, setCart }) => {

  const [cartItem, setCartItem] = useState(1)

  const removeToCart = () => {
    const filterCart = cart.filter((prodCart) => prodCart.producto._id !== productCart.producto._id);
    setCart(filterCart);
  };

  const oneMore = () => {
    setCartItem(cartItem + 1);
  };

  const oneLess = () => {
    setCartItem(cartItem - 1);
  };

const subTotal = productCart.producto.price*cartItem

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
          src={productCart.producto.image}
        />
        <Card.Text className="text-center col-12 col-lg-2" >
          {productCart.producto.name}
        </Card.Text>
        <Card.Text className="text-center  col-12 col-lg-2">
          <h6>Precio Unit:${productCart.producto.price}</h6>
        </Card.Text>
        <div className="d-flex justify-content-center align-content-center m-2 col-12 col-lg-2">
          <button onClick={oneLess} className="agregar-sacar-btn">-</button>
          <h4 className="m-2">{cartItem}</h4>
          <button onClick={oneMore} className="agregar-sacar-btn">+</button>
        </div>
        <Card.Text className="text-center col-12 col-lg-2">
          <h6>Sub total: ${subTotal.toFixed(2)}</h6>
        </Card.Text>
        <hr />
      </div>
    </>
  )
}
