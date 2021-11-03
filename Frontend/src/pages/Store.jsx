import React, { useState } from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import { CardsProduct } from "../components/cardProduct/CardsProduct";
import { FiltersProducts } from "../components/filtersProducts/FiltersProducts";
import { SliderProducts } from "../components/sliderProductos/SliderProducts";
import { CartSideButton } from "../components/cartSideButton/CartSideButton";

function Store({ productos, favorites, setFavorites, cart, setCart, allProducts }) {
  const [showSideCart, setShowSideCart] = useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col className="col-12 col-md-3  columnaFiltros">
            <FiltersProducts />
          </Col>
          <Col className="col-12 col-md-9 columnaProductos p-0">
            <CardsProduct
              allProducts={allProducts}
              favorites={favorites}
              setFavorites={setFavorites}
              cart={cart}
              setCart={setCart}
              setShowSideCart={setShowSideCart}
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
    </>
  );
}

export default Store;
