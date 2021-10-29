import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Card} from "react-bootstrap";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./sliderProducts.css"

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
import { Link } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Pagination]);


export function SliderProducts({ productos }) {

  const mapSliderProductos = productos?.map((producto, i) => (

    <SwiperSlide
      key={i} producto={producto}
      className="sliderTamñano mt-5">
      <div>
        <div className="mx-3">
          <Card style={{ width: "21rem" }} className="d-flex flex-column align-items-center position-relative">
            <div className="mt-3">
              <Card.Img
                className=""
                style={{ width: "3rem" }}
                variant="top"
                src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_badges/v2/95-TS.svg" />
              <Card.Img
                variant="top"
                src={producto.image} />
            </div>
            <Card.Body>
              <Card.Title className="descripcion mt-1 text-center">
                {producto.name}
              </Card.Title>
              <Card.Text className="text-center">
                <Button as={Link} to={`/store/${producto._id}`} className="btn-admin">MÁS INFORMACIÓN</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </SwiperSlide>
  ));
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
        {mapSliderProductos}
      </Swiper>
    </>
  );
}
