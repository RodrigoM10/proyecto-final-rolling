import React from "react";
import Cardsnews from "../components/CardsNews/CardsNews";
import CarouselHeader from "../components/carousellHeader/CarouselHeader";
import { Container } from "react-bootstrap";
import { CarouselComments } from "../components/carouselComments/CarouselComments";
import "../App.css";
import "../components/CardsNews/cardsNews.css";
import CollectionTable from "../components/CardsNews/CollectionTable";

function Home() {
  let sliderProductos = [
    {
      img: "https://i.annihil.us/u/prod/marvel/i/mg/c/40/61a90e42bfdf5.jpg",
      titulo: "Lanzamientos semanales",
      subtitulo: "Qué viene a Marvel Unlimited este mes",
    },
    {
      img: "https://i.annihil.us/u/prod/marvel/i/mg/2/c0/61a582065ae21.jpg",
      titulo: "Demon Days: Blood Feud' #1",
      subtitulo: "El capítulo final de la saga 'Demon Days' de Peach Momoko",
    },
    {
      img: "https://i.annihil.us/u/prod/marvel/i/mg/5/c0/61a6b01fd7423.jpg",
      titulo: "Marvel Unlimited",
      subtitulo: "La historia de Kushala",
    },
    {
      img: "https://i.annihil.us/u/prod/marvel/i/mg/d/b0/61a5837951066.jpg",
      titulo: "Lanzamientos semanales",
      subtitulo: "Nuevos cómics esta semana",
    },
    {
      img: "https://i.annihil.us/u/prod/marvel/i/mg/6/90/61a582cb916c9.jpg",
      titulo: "Lanzamientos semanales",
      subtitulo: "Nueva en Marvel Unlimited",
    },
  ];

  let sliderMensajes = [
    {
      id: "1",
      image:
        "https://www.dccomics.com/sites/default/files/DCC_essential_DCUI_Harleen_5ff38bd80306b1.58475874_6008cf61566152.02905072.jpg",
      titulo: "HARLEEN",
    },
    {
      id: "1",
      image:
        "https://www.dccomics.com/sites/default/files/DCC_essential_DCUI_MM_5ff38e3ba8eaa1.08173554_6008d3da836647.83242395.jpg",
      titulo: "MISTER MIRACLE",
    },
    {
      id: "1",
      image:
        "https://www.dccomics.com/sites/default/files/DCC_essential_DCUI_SYO_5ff38f98b98f77.05306495_6008d217ae2df7.87886988.jpg",
      titulo: "SUPERMAN: YEAR ONE",
    },
    {
      id: "1",
      image:
        "https://www.dccomics.com/sites/default/files/DCC_essential_DCUI_DeathMetal_6008d71b40e4c9.34294698.png",
      titulo: "DARK NIGHT: DEATH METAL",
    },
    {
      id: "1",
      image:
        "https://www.dccomics.com/sites/default/files/DCC_essential_DCUI_Preacher_6008dbf93cc6c0.68647020.png",
      titulo: "PREACHER",
    },
    {
      id: "1",
      image:
        "https://www.dccomics.com/sites/default/files/DCC_essential_DCUI_Lucifer_6008dd59ca73d4.83565836.png",
      titulo: "LUCIFER",
    },
    {
      id: "1",
      image:
        "https://www.dccomics.com/sites/default/files/DCC_essential_DCUI_SA_5ff391c5c05e09.76539857_6008d48c3efc14.81756508.jpg",
      titulo: "STRANGE ADVENTURES",
    },
    {
      id: "1",
      image:
        "https://www.dccomics.com/sites/default/files/DCC_essential_DCUI_Amethyst_6008decce0d8c3.35962619.png",
      titulo: "AMETHYST #1",
    },
  ];

  return (
    <>
      <CarouselHeader sliderProductos={sliderProductos} />
      <Cardsnews />
      <div className="mb-5">
        <CollectionTable className="mb-5" />
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
