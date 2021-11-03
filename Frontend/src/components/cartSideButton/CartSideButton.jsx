import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { BsCart, BsCartFill } from "react-icons/bs";
import { CardSideCarrito } from "../cardCart/CardSideCarrito";

export const CartSideButton = ({ cart, setCart, showSideCart, setShowSideCart }) => {

  const handleClose = () => setShowSideCart(false);
  const handleShow = () => setShowSideCart(true);

  const mapSideCarrito = cart?.map((producto, i) => (<CardSideCarrito key={i} producto={producto} cart={cart} setCart={setCart} />
  ));

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
      <Offcanvas show={showSideCart} onHide={handleClose}>
        <Offcanvas.Header closeButton> Tu Carrito </Offcanvas.Header>
        <Offcanvas.Body className="text-center mt-5">
          <div className="d-flex flex-column ">
            {mapSideCarrito}
          </div>
          <Button closeButton className="" aria-label="Close" variant="secondary">CONTINUA COMPRANDO</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
