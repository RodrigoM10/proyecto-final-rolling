import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./productFullScreen.css";

export const ProductFullScreen = ({ producto, cart, setCart }) => {
  const precioMayor = (producto.price) * 0.90;

  const [isInCart, setIsInCart] = useState(false);

  const cantidad = 1

  const addToCart = () => {
    setCart((cart) => cart.concat({ producto, cantidad }));
  };

  useEffect(() => {
    const inCart = cart?.find((productoCart) => productoCart.producto._id === producto._id);
    if (inCart) {
      setIsInCart(true);
    }
  }, [cart, producto]);

  return (
    <>
      <Row className="details-product-bg" style={{
        backgroundImage: `url(${producto.background})`
      }}>
        <Col className="columna-detalle col-12 col-md-10 col-lg-8 col-xl-5 text-center">
            <span className="producto-nombre">{producto.name}</span>
            <h2 className="producto-descripcion mt-3">{producto.description}</h2>
            <div className="precio-mayor mt-4">
                <p>${(precioMayor).toFixed(2)}</p>
                <span>
                  (12 o MÁS BOTELLLAS)
                </span>
            </div>
          <p className="precio-menor mt-1 ">${producto.price} POR BOTELLA</p>
          <div className="mb-2">
          <button
              disabled={isInCart}
              className={isInCart ? 'col-9  responsive-cart-button-add' : ' col-9 btn-general-style'}
              onClick={addToCart} >
              {isInCart ? (
                'Añadido al Carrito'
              ) : (
                'Añadir al Carrito'
              )}
          </button>
          </div>
        </Col>
      </Row>
    </>
  );
};
