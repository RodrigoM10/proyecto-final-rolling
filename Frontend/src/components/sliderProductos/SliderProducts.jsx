import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Card, Container, Image } from "react-bootstrap";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./sliderProducts.css"

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);


export const SliderProducts = () => {

    // Array harcodeado de productos.

let sliderProductos = [
    {
      id: "1",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/ITM50936_GeoffMerrillMountHurtleShiraz2014__20-07-22_webRes_1000x1000_fa35cacf-1cae-4bed-9b60-f096f4f1b378_750x750.png",
      descripcion: "2014 Geoff Merrill Mount Hurtle Shiraz",
      precio: "$24.99",
    },
    {
      id: "2",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/96563_b577dd53-2d7a-4dc4-9926-7216494da755_750x750.png",
      descripcion: "2018 Dandelion Lion's Den Shiraz",
      precio: "$24.99",
    },
    {
      id: "3",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/81275_750x750.png",
      descripcion: "NV Masottina Prosecco DOC Brut",
      precio: "$24.99",
    },
    {
      id: "4",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      precio: "$24.99",
    },
    {
      id: "5",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      precio: "$24.99",
    },
    {
      id: "6",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      precio: "$24.99",
    },
    {
      id: "7",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      precio: "$24.99",
    },
    {
      id: "8",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      precio: "$24.99",
    },
    {
      id: "9",
      img: "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      precio: "$24.99",
    }
  ];
  
  let mapSlider = sliderProductos;

    return (
        <>
        <h3 className="text-center masVendidos">Más vendidos</h3>
  
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {mapSlider.map((producto) => {
            return (
              <SwiperSlide className="sliderTamñano mt-5">
                  <div>
                    <div className=" mx-3">
                      <Card style={{ width: "21rem" }}>
                        <div className="imagenesProducto mt-3 d-flex">
                          <Card.Img
                            className="m-2"
                            style={{ width: "3rem" }}
                            variant="top"
                            src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_badges/v2/95-TS.svg"
                          />
                          <Card.Img
                            variant="top"
                            src={producto.img}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title className="descripcion mt-1 text-center">
                            {producto.descripcion}
                          </Card.Title>
                          <Card.Text className="mt-5 text-center">
                            {producto.precio}
                          </Card.Text>
                          <Card.Text className="text-center">
                          <Button variant="secondary">MÁS INFORMACIÓN</Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <Container className="text-center">
          <Image
            className="imagenFinal"
            src="https://cdn.shopify.com/s/files/1/1504/5726/files/wk15-WED_061021_The_Ground-Breaking-Nosto_Banner_-_Desktop.png"
          />
        </Container> */}
      </>
    )
}
