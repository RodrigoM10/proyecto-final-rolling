import React from "react";
import Cardproducto from "./CardProducto";
import "./CardProductos.css";

const CardProductos = ({ productos }) => {
  const mapProductos = productos.map((producto) => (
    <Cardproducto producto={producto} />
  ));

  return <div className="d-flex flex-wrap justify-content-center">{mapProductos}</div>;
};

export default CardProductos;
