import React from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import { CardsProduct } from "../components/cardProduct/CardsProduct";
import { FiltersProducts } from "../components/filtersProducts/FiltersProducts";
import { SliderProducts } from "../components/sliderProductos/SliderProducts";
import { CartSideButton } from "../components/cartSideButton/CartSideButton";


function Store() {
  // array harcodeado de productos
  let productos = [
    {
      id: "1",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/OLG301492_x400.png",
      descripcion: "NV Marcel Martin Tete du Cuvee Cremant de Loire",
      precioLista: "$42.99",
      precioConDescuento: "$24.99",
    },
    {
      id: "2",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/ITM44936-2018DandelionLion_sDenShiraz_x400.png",
      descripcion: "2018 Dandelion Lion's Den Shiraz",
      precioLista: "$40.00",
      precioConDescuento: "$20.99",
    },
    {
      id: "2",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/ENG__Prosecco_Brut_Doc_Treviso_x400.png",
      descripcion: "NV Masottina Prosecco DOC Brut",
      precioLista: "$29.99",
      precioConDescuento: "$15.99",
    },

    {
      id: "2",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/ITM23706_Blue_Pyrenees_Estate_Section_26_Cabernet_Sauvignon_2016_x400.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      precioLista: "$34.99",
      precioConDescuento: "$19.99",
    },
    {
      id: "1",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/OLG301492_x400.png",
      descripcion: "NV Marcel Martin Tete du Cuvee Cremant de Loire",
      precioLista: "$42.99",
      precioConDescuento: "$24.99",
    },
    {
      id: "2",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/ITM44936-2018DandelionLion_sDenShiraz_x400.png",
      descripcion: "2018 Dandelion Lion's Den Shiraz",
      precioLista: "$40.00",
      precioConDescuento: "$20.99",
    },
    {
      id: "2",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/ENG__Prosecco_Brut_Doc_Treviso_x400.png",
      descripcion: "NV Masottina Prosecco DOC Brut",
      precioLista: "$29.99",
      precioConDescuento: "$15.99",
    },

    {
      id: "2",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/ITM23706_Blue_Pyrenees_Estate_Section_26_Cabernet_Sauvignon_2016_x400.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      precioLista: "$34.99",
      precioConDescuento: "$19.99",
    },
  ];

  return (
    <>
      <Container>
          <Row>
              <Col className="col-12 col-md-3  columnaFiltros">
                <FiltersProducts />
              </Col>
              <Col className="col-12 col-md-9 columnaProductos p-0">
                <CardsProduct  productos={productos} />
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
