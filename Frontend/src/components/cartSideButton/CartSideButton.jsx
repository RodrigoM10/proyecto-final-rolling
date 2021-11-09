import React from "react";
import { Button, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsCart, BsCartFill } from "react-icons/bs";
import { MdOutlineCleaningServices } from "react-icons/md";
import { CardSideCarrito } from "../cardCart/CardSideCarrito";

export const CartSideButton = ({ cart, setCart, showSideCart, setShowSideCart }) => {

  const handleClose = () => setShowSideCart(false);
  const handleShow = () => setShowSideCart(true);

  const changeCantidad = (_id, cantidad) => {
    const updateCart = cart.map((productCart) => {
        if (productCart.producto._id === _id) {
            return { ...productCart, cantidad };
        }
        return productCart
    });
    setCart(updateCart);
};

  let total = cart.reduce((total, { producto, cantidad }) => total + producto.price * cantidad, 0);

  const mapSideCarrito = cart?.map((productCart, i) => (<CardSideCarrito 
    key={i} productCart={productCart} 
    cart={cart} setCart={setCart}
    changeCantidad={changeCantidad} />
  ));

  //fn limpia productos del carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Button className="cart-side-btn" variant="secondary" onClick={handleShow}>
        {
          cart.length > 0 ?
            <>
              < BsCartFill />
              <span className="swym-header--count">{cart.length}</span>
            </>
            :
            <BsCart />
        }
      </Button>
      <Offcanvas
        show={showSideCart}
        onHide={handleClose}
        scroll='true'
      >
        <Offcanvas.Header closeButton> <h4 style={{ color: '#b59062' }} >Tu Carrito </h4>  </Offcanvas.Header>
        <Offcanvas.Body className="text-center mt-2">
          {cart.length !== 0 &&
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
              <button className="clean-cart my-2" onClick={clearCart}><MdOutlineCleaningServices /></button>
            </OverlayTrigger>
          }
          <div className="d-flex flex-column ">
            {mapSideCarrito}
          </div>
          <h2>TOTAL: ${total.toFixed(2)} </h2>
          <buton onClick={handleClose} className="btn-general-style" aria-label="Close">CONTINUA COMPRANDO</buton>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
