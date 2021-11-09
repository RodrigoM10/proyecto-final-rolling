import React from "react";
import Cardsnews from "../components/CardsNews/CardsNews";
import CarouselHeader from "../components/carousellHeader/CarouselHeader";
import {
  Container,
} from "react-bootstrap";
import { CarouselComments } from "../components/carouselComments/CarouselComments";
import "../App.css";
import "../components/CardsNews/cardsNews.css";
import CollectionTable from "../components/CardsNews/CollectionTable";

function Home() {
  let sliderProductos = [
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/Web_HomepageCarousel_NoCopy.png?v=1634076831",
      titulo: "POR TIEMPO LIMITADO",
      subtitulo: "10% OFF EN TODO",
      descripcion:
        "8000+ vinos para elegir. El descuento se aplica automáticamente en el carrito, cuando gasta más de $199.",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/Braze-OFFER_1_Hewitson_Barossa_Valle-TWC_Home_-_Banner.jpg?v=1634018525",
      titulo: "HEWITSON",
      subtitulo: "Vino legendario de Ancient Vines",
      descripcion: "Es esta la mejor oferta de Barossa Shiraz en años?",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/wk16-SAT_161021_Dog_Point_Sauvignon-TWC_Home_-_Banner.jpg?v=1633921769",
      titulo: "DOG POINT",
      subtitulo: "El mejor vino blanco de Nueva Zelanda...",
      descripcion: "95 puntos y ahora desde $24.99",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/wk16-TUE_121021_La_Pleiade_Heathcote-TWC_Home_-_Banner.jpg?v=1633922637",
      titulo: "11 AÑOS",
      subtitulo: "Lanzamiento del museo de culto de Jasper Hill y Chapoutier",
      descripcion: "2010 La Pleiade Shiraz",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/wk16-WED_131021_Nothing_Below_95_Pon-TWC_Home_-_Banner.png?v=1633922820",
      titulo: "PAQUETE DE DESCUBRIMIENTO",
      subtitulo: "Nada por debajo de 95 puntos - Valorado en $516",
      descripcion: "Ahora solo $239",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/1504/5726/files/bg-hp-top-banner-right-01oct20.jpg?v=1602138442",
      titulo: "",
      subtitulo: "Destino de referencia de Australia para el vino.",
      descripcion: "Dando forma al futuro del vino desde hace más de 74 años",
    },
  ];

  let sliderMensajes = [
    {
      id: "1",
      titulo: "Servicio excepcional",
      descripcion:
        "Tenían el vino que quería a un precio excelente y me lo entregaron rápidamente y sin problemas, ¿qué más se puede pedir?",
      nombre: "Alvaro, AR",
    },
    {
      id: "2",
      titulo: "Servicio Fantástico",
      descripcion:
        "La experiencia fue excelente. El pedido se realizó sin problemas y el artículo se entregó bien empaquetado, a tiempo, como se describe y en excelentes condiciones. La experiencia del sitio web también fue buena.",
      nombre: "Rodrigo, AR",
    },
    {
      id: "3",
      titulo: "Gran valor, vinos maravillosos",
      descripcion:
        "Estoy muy contento con todas las compras de TWC hasta la fecha. Hay una gran selección, precios razonables que ofrecen una excelente relación calidad-precio. ¡El proceso de pago es fácil y la entrega siempre es bastante rápida! Cliente muy feliz",
      nombre: "Nicolas, ES",
    },
    {
      id: "4",
      titulo: "Gran valor, vinos maravillosos",
      descripcion:
        "Estoy muy contento con todas las compras de TWC hasta la fecha. Hay una gran selección, precios razonables que ofrecen una excelente relación calidad-precio. ¡El proceso de pago es fácil y la entrega siempre es bastante rápida! Cliente muy feliz",
      nombre: "Nicolas, ES",
    },
    {
      id: "5",
      titulo: "Gran valor, vinos maravillosos",
      descripcion:
        "Estoy muy contento con todas las compras de TWC hasta la fecha. Hay una gran selección, precios razonables que ofrecen una excelente relación calidad-precio. ¡El proceso de pago es fácil y la entrega siempre es bastante rápida! Cliente muy feliz",
      nombre: "Nicolas, ES",
    },
  ];

  return (
    <>
      <CarouselHeader sliderProductos={sliderProductos} />
      <Cardsnews />
      <div className="mb-5">
      <CollectionTable className="mb-5"/>
      </div>
      <div className="comentarios-estilo mt-5">
        <Container>
          <CarouselComments sliderMensajes={sliderMensajes} />
        </Container>
      </div>
    </>
  );
}

export default Home;
