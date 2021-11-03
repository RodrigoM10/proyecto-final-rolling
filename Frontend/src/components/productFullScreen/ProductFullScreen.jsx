import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./detailsProduct.css";

export const ProductFullScreen = ({ producto }) => {
 
  const precioMayor = (producto.price)*0.90;

  return (
    <>
      <Row className="detalle-estilo" style={{ 
      backgroundImage: `url(${producto.background})`
    }}>
        <Col className="columna-detalle col-12 col-md-10 col-lg-8 col-xl-5 text-center">
        <span className="producto-nombre">{producto.name}</span>
        <h2 className="producto-descripcion mt-3">{producto.description}</h2>
        <div className="precio-mayor mt-4">
          <p>${(precioMayor).toFixed(2)}</p>(12 o MÁS BOTELLLAS)</div>
          <p className="precio-menor mt-5">${producto.price} POR BOTELLA</p>
          <Button className="boton-comprar">Añadir al carrito</Button>
        </Col>
      </Row>
      </>
  );
};
