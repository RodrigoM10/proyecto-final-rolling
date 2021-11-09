import React, { useEffect } from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import "./cardsNews.css";
// Imports Effect to scroll down
import Aos from "aos";
import "aos/dist/aos.css";

const Cardsnews = () => {
  // Efecto para scroll down 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <>
      <div data-aos="fade-up" className="mt-5 text-center">
        <h3 className="news-titulo">Discover new flavours and producers</h3>
      </div>
      <Container className="mt-2 mb-3">
        <Row data-aos="fade-up">
          <Col className="col-tamaño">
            <Card className="card-estilo border-0 text-center" style={{ width: "21rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/1504/5726/files/BWIW_-_Masterclass_Generic_-_Homepage_Tile_214b065a-4ee8-419e-a8a3-04d22fbbdc6d.png?v=1632271161"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                  Experience Our Free Virtual Masterclasses
                </Card.Title>
                <Card.Text className="borde-card"></Card.Text>
                <Card.Text className="texto-card">
                  With legendary winemakers from Deep Woods and Tahbilk, plus an
                  international wine judge, in a series of unrivalled virtual
                  masterclasses.
                </Card.Text>
                <Button className="button-news">WATCH NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-tamaño">
            <Card className="card-estilo border-0 text-center" style={{ width: "21rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/1504/5726/files/BWIW_-_Wine_Quiz_-_Homepage_Tile_0fbeb109-ceb0-489e-a0c4-a0fbb97cd26e.png?v=1619674446"
              />
              <Card.Body>
                <Card.Title className="card-titulo">Take Our Wine Preference Quiz</Card.Title>
                <Card.Text className="borde-card"></Card.Text>
                <Card.Text className="texto-card">
                  To receive a personalised wine experience, tailor-made just for you.

                </Card.Text>
                <Button className="button-news">EXPLORE NOW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-tamaño">
            <Card className="card-estilo border-0 text-center" style={{ width: "21rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.shopify.com/s/files/1/1504/5726/files/hp-discovery-3-01oct20.jpg?v=1601523862"
              />
              <Card.Body>
                <Card.Title className="card-titulo">Industry leading Rewards Program</Card.Title>
                <Card.Text className="borde-card"></Card.Text>
                <Card.Text className="texto-card">
                  Our unrivaled rewards program includes discount vouchers, free shipping and more...
                </Card.Text>
                <Button className="button-news">FIND OUT MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cardsnews;
