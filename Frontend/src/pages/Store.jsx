import React from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import { CardsProduct } from "../components/cardProduct/CardsProduct";
import { FiltersProducts } from "../components/filtersProducts/FiltersProducts";
import { SliderProducts } from "../components/sliderProductos/SliderProducts";
import { CartSideButton } from "../components/cartSideButton/CartSideButton";
import { useEffect, useState } from "react";
import axios from "axios";

function Store() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const response = await axios.get("http://localhost:4000/api/productos");
    console.log(response.data);
    setProductos(response.data);
  };

  useEffect(() => {
    getProductos();
  }, []);

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
