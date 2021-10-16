import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./carouselComments.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export const CarouselComments = () => {
  // Array harcodeado de productos.

  let sliderProductos = [
    {
      id: "1",
      titulo: "Outstanding Service",
      descripcion:
        "They had the wine I wanted at an excellent price and it was delivered quickly with no fuss - what more could you ask for?",
      nombre: "Alvaro, AR",
    },
    {
      id: "2",
      titulo: "Fantastic Service",
      descripcion:
        "The experience was excellent. Order proceeded smoothly and item was delivered well packaged, on time, as described and in great condition. Website experience was also good.",
      nombre: "Rodrigo, AR",
    },
    {
      id: "3",
      titulo: "Great Value, Wonderful Wines",
      descripcion:
        "I’ve been very happy with all purchases from TWC to date. There’s a great selection, reasonable prices offering excellent value. Checkout is easy and delivery is always quite quick! Very happy customer",
      nombre: "Nicolas, ES",
    },
    {
      id: "4",
      titulo:
        "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      nombre: "$24.99",
    },
    {
      id: "4",
      titulo:
        "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      nombre: "$24.99",
    },
    {
      id: "4",
      titulo:
        "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      nombre: "$24.99",
    },
    {
      id: "4",
      titulo:
        "https://cdn.shopify.com/s/files/1/1504/5726/products/112294_750x750.png",
      descripcion: "2017 Blue Pyrenees Estate Sección 26 Cabernet Sauvignon",
      nombre: "$24.99",
    },
  ];

  let mapSlider = sliderProductos;

  return (
    <>
      <h3 className="text-center titulo-comentarios">
        See what our customers have said in September
      </h3>
      <div className="bordes-estilo">
        <Container>
          <Row>
            <Col className="col-lg-4 satisfaccion-estilo d-flex justify-content-center p-5">
              <div class="circulo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-emoji-smile"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
              </div>
              <div>
                <h4>98.2%</h4>
                <p>Wine Satisfaction Rate</p>
              </div>
            </Col>
            <Col className="col-lg-4 satisfaccion-estilo d-flex justify-content-center p-5">
              <div class="circulo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-hand-thumbs-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
              </div>
              <div>
                <h4>4.7</h4>
                <p>Store Rating via Google</p>
              </div>
            </Col>
            <Col className="col-lg-3 satisfaccion-estilo mx-4 d-flex justify-content-center p-5">
              <div class="circulo p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-shop"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                </svg>
              </div>
              <div className="mx-1">
                <h4>Our Producers</h4>
                <p>We choose to partner with small to medium winemakers, to bring you authentic wine and great value</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
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
            <>
              <div>
                <SwiperSlide className="Card-tamaño mt-5">
                  <div>
                    <div className=" mx-3">
                      <Card
                        className="card-comentarios"
                        style={{ width: "21rem" }}
                      >
                        <div className="mt-3 text-center">
                          <h3>{producto.titulo}</h3>
                        </div>
                        <Card.Body>
                          <Card.Title className="descripcion-comentarios mt-1 text-center">
                            "{producto.descripcion}"
                          </Card.Title>
                          <Card.Text className="descripcion-nombre text-center">
                            {producto.nombre}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </>
          );
        })}
      </Swiper>
    </>
  );
};
