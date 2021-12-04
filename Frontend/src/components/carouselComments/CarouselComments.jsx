import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./carouselComments.css";

// Import Effect to scroll down
import Aos from "aos";
import "aos/dist/aos.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export const CarouselComments = ({ sliderMensajes }) => {
  // Efecto para scroll down
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const mapSliderMensajes = sliderMensajes.map((mensaje, i) => (
    <SwiperSlide key={i} mensaje={mensaje} className="card-tamaño mt-5">
      <div>
        <div className=" mx-3">
          <Card className="card-nuevo">
            <Card.Img className="nuevo-imagen" Image src={mensaje.image} />
            <Card.ImgOverlay className="tamaño-nuevo">
              <Card.Title className="titulo-nuevo">{mensaje.titulo}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <h3 data-aos="fade-up" className="text-center titulo-comentarios ">
      NUEVO EN DC UNIVERSE INFINITE
      </h3>
      <Swiper
        data-aos="fade-up"
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
        className="mySwiper  "
      >
        {mapSliderMensajes}
      </Swiper>
    </>
  );
};
