import React from 'react'
import { CardProduct } from "./CardProduct";
import './cardProduct.css'


export const CardsProduct = ({allProducts, favorites, setFavorites, cart, setCart, setShowSideCart }) => {

  const limit = 9;
  console.log("🚀~ file: CardsProduct.jsx ~ line 9 ~ CardsProduct ~ limit", limit)
  const initial = 1 ;
  console.log("🚀 ~ file: CardsProduct.jsx ~ line 11 ~ CardsProduct ~ initial", initial)
  const last = initial + limit;
  console.log("🚀 ~ file: CardsProduct.jsx ~ line 13 ~ CardsProduct ~ last", last)
  const productsPaginated = allProducts.slice(initial, last);
  console.log("🚀 ~ file: CardsProduct.jsx ~ line 16 ~ CardsProduct ~ productsPaginated", productsPaginated)


  const mapProductos = productsPaginated?.map((producto, i) => (
    <CardProduct key={i} producto={producto}
      favorites={favorites}
      setFavorites={setFavorites}
      cart={cart}
      setCart={setCart}
      setShowSideCart={setShowSideCart} />
  ));
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">{mapProductos}</div>
    </>
  )
}
