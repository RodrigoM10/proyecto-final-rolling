import React, { useState } from 'react'
import { PaginationStore } from '../paginationStore/PaginationStore';
import { Card } from 'react-bootstrap';
import { CardProduct } from "./CardProduct";
import './cardProduct.css'


export const CardsProduct = ({ allProducts, favorites, setFavorites, cart, setCart, setShowSideCart }) => {

  // Paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem)

  const pages = [];
  for (let i = 1; i <= Math.ceil(allProducts.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const mapProductos = currentItems?.map((producto, i) => (
    <CardProduct key={i} producto={producto}
      favorites={favorites}
      setFavorites={setFavorites}
      cart={cart}
      setCart={setCart}
      setShowSideCart={setShowSideCart} />
  ));

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {currentItems?.length === 0 ?
        <Card className="no-results-card text-center text-dark-50 p-5 m-5">
          <Card.Title>Producto no encontrado</Card.Title>
        </Card> :
        <>
        <span className="mb-3">Pagina {currentPage} de {pages.length}</span>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">{mapProductos}</div>
        </>
      }
      {/* Pagination */}
      <PaginationStore
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </div>
  )
}
