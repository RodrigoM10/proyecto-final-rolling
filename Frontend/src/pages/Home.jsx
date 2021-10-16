import React from "react";
import Cardsnews from "../components/CardsNews/CardsNews";
import CarouselHeader from "../components/carousellHeader/CarouselHeader";
import { Container } from "react-bootstrap";
import { CarouselComments } from "../components/carouselComments/CarouselComments";

function Home() {
  return (
    <>
      <CarouselHeader />
      <Cardsnews />
      <div className="comentarios-estilo">
        <Container>
          <CarouselComments />
        </Container>
      </div>
    </>
  );
}

export default Home;
