import React from 'react'
import { CardProduct } from "./CardProduct";
import './cardProduct.css'


export const CardsProduct = ({ productos }) => {
  const mapProductos = productos.map((producto) => (
    <CardProduct producto={producto} />
  ));
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">{mapProductos}</div>
    </>
  )
}
