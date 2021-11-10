import React, { useEffect, useState } from 'react'
import { PaginationStore } from '../paginationStore/PaginationStore';
import { Card } from 'react-bootstrap';
import { CardProduct } from "./CardProduct";
import './cardProduct.css'


export const CardsProduct = ({ favorites, setFavorites, cart, setCart, setShowSideCart, busqueda, allProducts, selectCategory, selectPrice }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    const limit = 8;
    const start = 0 + currentPage * limit - limit;
    const end = start + limit;

    const filteredProducts = allProducts
    .filter((prodFil) => !selectCategory ||  prodFil.category === selectCategory)
    .filter((prodfil)=> !selectPrice || prodfil.price <= selectPrice)

    let searchProducts = [];

    if (busqueda.length !== '') {
      searchProducts = filteredProducts.filter((prod) => {
        return prod.name.toLowerCase().includes(busqueda.toLowerCase());
      });
    } else {
      searchProducts = filteredProducts;
    }
    const productsSlice = searchProducts.slice(start, end);
    setCurrentProducts(productsSlice);

    const totalPages = Math.ceil(searchProducts.length / limit);
    setTotalPages(totalPages);
  }, [allProducts, currentPage, busqueda, selectCategory, selectPrice]);


  const mapProductos = currentProducts?.map((producto) => (
    <CardProduct key={producto._id} producto={producto}
      favorites={favorites}
      setFavorites={setFavorites}
      cart={cart}
      setCart={setCart}
      setShowSideCart={setShowSideCart} />
  ));

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {currentProducts?.length === 0 ?
        <Card className="no-results-card text-center text-dark-50 p-5 m-5">
          <Card.Title>Producto no encontrado</Card.Title>
        </Card> :
        <>
          <span className="mb-3">Pagina {currentPage} de {totalPages}</span>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">{mapProductos}</div>
        </>
      }
      {/* Pagination */}
      <PaginationStore
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
