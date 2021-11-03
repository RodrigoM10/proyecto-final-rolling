import React from 'react'
import { CardProduct } from "./CardProduct";
import './cardProduct.css'


export const CardsProduct = ({allProducts, favorites, setFavorites, cart, setCart, setShowSideCart }) => {
  const mapProductos = allProducts?.map((producto, i) => (
    <CardProduct key={i} producto={producto}
      favorites={favorites}
      setFavorites={setFavorites}
      cart={cart}
      setCart={setCart}
      setShowSideCart={setShowSideCart} />
  ));
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">{mapProductos}</div>
    </>
  )
}
