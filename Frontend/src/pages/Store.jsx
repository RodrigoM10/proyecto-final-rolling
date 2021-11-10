import React, { useState } from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import { CardsProduct } from "../components/cardProduct/CardsProduct";
import { FiltersProducts } from "../components/filtersProducts/FiltersProducts";
import { SliderProducts } from "../components/sliderProductos/SliderProducts";
import { CartSideButton } from "../components/cartSideButton/CartSideButton";
import { SpinnerRW } from "../components/spinner/SpinnerRW";

function Store({ productos, favorites, setFavorites, cart, setCart, allProducts, setProductos, busqueda, getProductos}) {
  const [showSideCart, setShowSideCart] = useState(false);

  const [selectCategory, setSelectCategory] = useState('');

  const [selectPrice, setSelectPrice] = useState('');

  const clearFilterCategory = (value) => {
    setSelectCategory(value);
  }

  const clearFilterPrice = (value) => {
    setSelectPrice(value);
  }


  return (
    <div className="bg-grey">
      <Container>
        <h2 className="title-style mt-5">Todos nuestros vinos</h2>
        <Row>
          <Col className="col-12 col-md-2 d-flex justify-content-center p-0 mb-2">
            <FiltersProducts 
            setSelectCategory={setSelectCategory} selectCategory={selectCategory} 
            selectPrice={selectPrice}  setSelectPrice={setSelectPrice} 
            onselectCat={clearFilterCategory} onselectPri={clearFilterPrice}  />
          </Col>
          <Col className="d-flex justify-content-center mt-3 mb-5 ">
            <CardsProduct
              getProductos={getProductos}
              setProductos={setProductos}
              allProducts={allProducts}
              busqueda={busqueda}
              favorites={favorites}
              setFavorites={setFavorites}
              cart={cart}
              setCart={setCart}
              setShowSideCart={setShowSideCart}
              selectCategory={selectCategory}
              selectPrice={selectPrice}
            />
          </Col>
        </Row>
        <Container className="mt-5">
          <SliderProducts productos={productos} />
        </Container>
      </Container>
      <CartSideButton
        setCart={setCart}
        cart={cart}
        showSideCart={showSideCart}
        setShowSideCart={setShowSideCart}
        className="position-fixed" />
    </div>
  );
}

export default Store;
