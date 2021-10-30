import React from 'react'
import { CardProduct } from "./CardProduct";
import './cardProduct.css'


export const CardsProduct = ({ productos, favorites, setFavorites }) => {
  const mapProductos =  productos?.map((producto, i) => (<CardProduct key={i} producto={producto} favorites={favorites} setFavorites={setFavorites}/>
  ));
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">{mapProductos}</div>
    </>
  )
}
