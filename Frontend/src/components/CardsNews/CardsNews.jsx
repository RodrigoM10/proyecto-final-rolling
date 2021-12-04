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
        <h3 className="news-titulo">Ultimas Noticias</h3>
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
                src="https://www.dccomics.com/sites/default/files/styles/featured_pane_wide/public/featured_pane_images/DC_HP_FeatTout_ww80_wide_616db13dd15075.48263908.png?itok=ps4CfZNW"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                Celebra el 80 aniversario de Wonder Woman
                </Card.Title>
                <Card.Text className="borde-card"></Card.Text>
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
                src="https://www.dccomics.com/sites/default/files/styles/front_news_default/public/field/image/DCNATION_Blogroll2_JLIncarnate_61a57efb7a2138.59895170.jpg?itok=B8ydeIai"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                Quién es quién en la Liga de la Justicia</Card.Title>
                <Card.Text className="borde-card"></Card.Text>
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
                src="https://www.dccomics.com/sites/default/files/styles/front_news_default/public/field/image/ActorsAuthors_blog_61a6e6712e8be9.84796734.jpg?itok=g-UKJFNT"
              />
              <Card.Body>
                <Card.Title className="card-titulo">
                ¿Pueden dibujar también?               </Card.Title>
                <Card.Text className="borde-card"></Card.Text>
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
