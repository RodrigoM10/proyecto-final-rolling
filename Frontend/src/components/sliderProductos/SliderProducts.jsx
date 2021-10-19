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


export const SliderProducts = ({productos}) => {

const mapSliderProductos = productos.map((producto, i) =>(

<SwiperSlide
 key={i} producto={producto} 
 className="sliderTamñano mt-5">
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
    )
}
