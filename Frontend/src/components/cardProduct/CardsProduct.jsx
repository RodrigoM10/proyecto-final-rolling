import React from 'react'
import { Card } from 'react-bootstrap';
import { CardProduct } from "./CardProduct";
import './cardProduct.css'


export const CardsProduct = ({ allProducts, favorites, setFavorites, cart, setCart, setShowSideCart }) => {
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
      {allProducts.length === 0 ?
        <Card className="no-results-card text-center text-dark-50 p-5 m-5">
          <Card.Title>Producto no encontrado</Card.Title>
        </Card> :
        <div className="d-flex flex-wrap justify-content-center">{mapProductos}</div>
      }
    </>
  )
}
