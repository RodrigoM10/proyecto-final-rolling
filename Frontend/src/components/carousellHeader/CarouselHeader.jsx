import React from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import "./carouselHeader.css";

const Carouselheader = () => {
  let sliderProductos = [
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/Web_HomepageCarousel_NoCopy.png?v=1634076831",
      titulo: "LIMITED TIME ONLY",
      subtitulo: "10% OFF EVERYTHING",
      descripcion:
        "8000+ wines to choose from.  Discount automatically applied in cart, when you spend over $199.",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/Braze-OFFER_1_Hewitson_Barossa_Valle-TWC_Home_-_Banner.jpg?v=1634018525",
      titulo: "HEWITSON",
      subtitulo: "Ancient Vines Legendary Wine",
      descripcion: "Is this the best Barossa Shiraz deal in years?",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/wk16-SAT_161021_Dog_Point_Sauvignon-TWC_Home_-_Banner.jpg?v=1633921769",
      titulo: "DOG POINT",
      subtitulo: "New Zealand's Best White Wine...",
      descripcion: "95 points and now from $24.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/wk16-TUE_121021_La_Pleiade_Heathcote-TWC_Home_-_Banner.jpg?v=1633922637",
      titulo: "11 YEARS OLD",
      subtitulo: "97pt Cult Museum Release From Jasper Hill & Chapoutier",
      descripcion: "2010 La Pleiade Shiraz",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/wk16-WED_131021_Nothing_Below_95_Pon-TWC_Home_-_Banner.png?v=1633922820",
      titulo: "DISCOVERY PACK",
      subtitulo: "Nothing Below 95 Points Dozen - Valued At $516",
      descripcion: "Now only $239",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/bg-hp-top-banner-right-01oct20.jpg?v=1602138442",
      titulo: "",
      subtitulo: "Australia's benchmark destination for wine.",
      descripcion: "Shaping the future of wine for over 74 years.",
    },
  ];

  let mapSlider = sliderProductos;

  return (
    <>
      <Carousel className="carousel-style" fade>
        {mapSlider.map((producto) => {
          return (
            <Carousel.Item>
              <Row className="row-height d-flex flex-wrap">
                <Col className="col-12 col-md-6 p-0">
                  <Card className="bg-dark text-white borde text-center">
                    <Card.Img
                      src="https://cdn.shopify.com/s/files/1/1504/5726/files/bg-hp-top-banner-left.jpg?v=2588232508259960741"
                      alt="Card image"
                    />
                    <Card.ImgOverlay className="fondo">
                      <Card.Title className="card-titulo">
                        {producto.titulo}
                      </Card.Title>
                      <Card.Text className="sub-title">
                        {producto.subtitulo}
                      </Card.Text>
                      <Card.Text className="card-description">
                        {producto.descripcion}
                      </Card.Text>
                      <Button className="button-slider">SHOP NOW</Button>{" "}
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                <Col className="col-12-d-none col-md-6 p-0">
                  <img
                    className="d-block w-100 card-img"
                    src={producto.img}
                    alt="Second slide"
                  />
                </Col>
              </Row>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          );
        })}
        ;
      </Carousel>
    </>
  );
};

export default Carouselheader;
