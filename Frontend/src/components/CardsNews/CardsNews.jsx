import React, { useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./cardsNews.css";
// Imports Effect to scroll down
import Aos from "aos";
import "aos/dist/aos.css";


const scrollToTop = () => {
  window.scrollTo(0, 200);
};

const Cardsnews = () => {
  // Efecto para scroll down 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <div data-aos="fade-up" className="mt-5 text-center ">
        <h3 className="news-titulo">Descubre nuevos sabores y productores.</h3>
      </div>
      <Container className="mt-2 mb-3">
        <Row data-aos="fade-up">
          <Col className="col-tamaño">
            <Card
              className="card-estilo border-0 text-center"
              style={{ width: "21rem" }}
            >
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/1504/5726/files/BWIW_-_Masterclass_Generic_-_Homepage_Tile_214b065a-4ee8-419e-a8a3-04d22fbbdc6d.png?v=1632271161"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                  Experimente nuestras clases magistrales virtuales gratuitas
                </Card.Title>
                <Card.Text className="borde-card"></Card.Text>
                <Card.Text className="texto-card">
                  Con enólogos legendarios de Deep Woods y Tahbilk, además de un
                  juez internacional de vinos, en una serie de inigualables
                  clases magistrales.
                </Card.Text>
                <Button as={NavLink} to="/404" onClick={scrollToTop} className="button-news">VER AHORA</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-tamaño">
            <Card
              className="card-estilo border-0 text-center"
              style={{ width: "21rem" }}
            >
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/1504/5726/files/BWIW_-_Wine_Quiz_-_Homepage_Tile_0fbeb109-ceb0-489e-a0c4-a0fbb97cd26e.png?v=1619674446"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                  Responda nuestro cuestionario sobre preferencias de vinos
                </Card.Title>
                <Card.Text className="borde-card"></Card.Text>
                <Card.Text className="texto-card">
                  Para recibir una experiencia de vino personalizada, hecha a
                  medida solo para ti.
                </Card.Text>
                <Button as={NavLink} to="/404" onClick={scrollToTop} className="button-news">EXPLORA AHORA</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-tamaño">
            <Card
              className="card-estilo border-0 text-center"
              style={{ width: "21rem" }}
            >
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/1504/5726/files/hp-discovery-3-01oct20.jpg?v=1601523862"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                  Programa de recompensas líder en la industria
                </Card.Title>
                <Card.Text className="borde-card"></Card.Text>
                <Card.Text className="texto-card">
                  Nuestro programa de recompensas inigualable incluye vales de
                  descuento, gratis envío y más ...
                </Card.Text>
                <Button as={NavLink} to="/404" onClick={scrollToTop} className="button-news">SABER MÁS</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cardsnews;
