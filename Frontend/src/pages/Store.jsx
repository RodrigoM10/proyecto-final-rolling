import React from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import { CardsProduct } from "../components/cardProduct/CardsProduct";
import { FiltersProducts } from "../components/filtersProducts/FiltersProducts";
import { SliderProducts } from "../components/sliderProductos/SliderProducts";
import { CartSideButton } from "../components/cartSideButton/CartSideButton";

function Store({productos}) {

  return (
    <>
      <Container>
        <Row>
          <Col className="col-12 col-md-3  columnaFiltros">
            <FiltersProducts />
          </Col>
          <Col className="col-12 col-md-9 columnaProductos p-0">
            <CardsProduct productos={productos} />
          </Col>
        </Row>
        <Container className="mt-5">
          <SliderProducts />
        </Container>
      </Container>
      <CartSideButton className="position-fixed" />
    </>
  );
}

export default Store;
