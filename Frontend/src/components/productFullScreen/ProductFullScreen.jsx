import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./detailsProduct.css";

export const ProductFullScreen = ({ producto, cart, setCart }) => {
 
  const precioMayor = (producto.price)*0.90;

  const [isInCart, setIsInCart] = useState(false);

    // FUNCION PARA aÑADIR A CARRITO CARRITO
    const addToCart = () => {
      setCart((cart) => cart.concat({ producto }));
    };

    useEffect(() => { 
      const inCart = cart.find((productoCart) => productoCart.producto.id === producto.id);
      if (inCart) {
        setIsInCart(true);
      }
    }, [cart]);

  return (
    <>
      <Row className="detalle-estilo" style={{ 
      backgroundImage: `url(${producto.background})`
    }}>
        <Col className="columna-detalle col-12 col-md-10 col-lg-8 col-xl-5 text-center">
        <span className="producto-nombre">{producto.name}</span>
        <h2 className="producto-descripcion mt-3">{producto.description}</h2>
        <div className="precio-mayor mt-4">
          <p>${precioMayor}</p>(12 o MÁS BOTELLLAS)</div>
          <p className="precio-menor mt-5">${producto.price} POR BOTELLA</p>
          <button onClick={addToCart} className="responsive-navbar-button">Añadir al carrito</button>
        </Col>
      </Row>
      </>
  );
};
