import React from "react";
import Cardsnews from "../components/CardsNews/CardsNews";
import CarouselHeader from "../components/carousellHeader/CarouselHeader";
import { Container } from "react-bootstrap";
import { CarouselComments } from "../components/carouselComments/CarouselComments";

function Home() {

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


  let sliderMensajes = [
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
      titulo: "Great Value, Wonderful Wines",
      descripcion:
        "I’ve been very happy with all purchases from TWC to date. There’s a great selection, reasonable prices offering excellent value. Checkout is easy and delivery is always quite quick! Very happy customer",
      nombre: "Nicolas, ES",
    },
    {
      id: "5",
      titulo: "Great Value, Wonderful Wines",
      descripcion:
        "I’ve been very happy with all purchases from TWC to date. There’s a great selection, reasonable prices offering excellent value. Checkout is easy and delivery is always quite quick! Very happy customer",
      nombre: "Nicolas, ES",
    },
  ];


  return (
    <>
      <CarouselHeader sliderProductos={sliderProductos} />
      <Cardsnews />
      <div className="comentarios-estilo">
        <Container>
          <CarouselComments sliderMensajes={sliderMensajes} />
        </Container>
      </div>
    </>
  );
}

export default Home;
