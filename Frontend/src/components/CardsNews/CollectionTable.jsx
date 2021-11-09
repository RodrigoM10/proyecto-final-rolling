import React, { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Row,
  Tab,
  TabContent,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./collectionTable.css";
// Imports Effect to scroll down
import Aos from "aos";
import "aos/dist/aos.css";

const scrollToTop = () => {
  window.scrollTo(0, 250);
};


const CollectionTable = () => {

   // Efecto para scroll down 
   useEffect(() => {
    Aos.init({ duration: 2500 });
  }, [])

  return (
    <div>
      <Container className="text-center">
        <h3 data-aos="fade-up" className="collection-tilulo">Explore nuestras colecciones favoritas</h3>
        <Tab.Container  id="left-tabs-example" defaultActiveKey="first">
          <Row data-aos="fade-up" className="mt-5">
            <Col sm={3} className="p-0 col-sm-12 col-xl-3">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="first">
                    CONEXION GLOBAL
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="second">
                    COLECTIVO PREFERIDO
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="third">
                    MERCADO INTERNACIONAL
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="quarter">
                    EXCLUSIVAS COLECTIVAS
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={3} className="p-0 col-sm-12 col-xl-9">
              <Tab.Content>
                <Tab.Pane className="tab-transition" eventKey="first">
                  <TabContent />
                  <Row className="tab-responsive d-flex flex-wrap">
                    <Col className="col-12 p-0 col-sm-12 col-xl-6">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/1504/5726/files/hp-collections-1-01oct20.jpg?v=1601524350"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col col-estilo col-sm-12 col-xl-6">
                      <h3 className="mt-4">VINO CHICO</h3>
                      <p className="mt-5 pt-3">
                        Conexiones globales profundas con un dedo firmemente en
                        el pulso de los nombres a conocer de la industria.
                      </p>
                      <Button as={NavLink} to="/store" onClick={scrollToTop} className="button-news mt-5">
                        VER COLECCIÓN
                      </Button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane className="tab-transition" eventKey="second">
                  <TabContent />
                  <Row className="tab-responsive d-flex flex-wrap">
                    <Col className="col-12 p-0 col-sm-12 col-xl-6">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/1504/5726/files/hp-collections-2-01oct20.jpg?v=1601524387"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col-estilo">
                      <h3 className="mt-4">Preferido colectivo</h3>
                      <p className="mt-5 pt-3">
                        Los vinos que respaldamos. Ofreciendo sabor, carácter y
                        una fuerte identidad regional. Calidad garantizada y
                        valor en cada vaso.
                      </p>
                      <Button  as={NavLink} to="/store" onClick={scrollToTop} className="button-news mt-5">
                        VER COLECCIÓN
                      </Button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane className="tab-transition" eventKey="third">
                  <TabContent />
                  <Row className="tab-responsive d-flex flex-wrap">
                    <Col className="col-12 p-0 col-sm-12 col-xl-6">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/1504/5726/files/hp-collections-3-01oct20.jpg?v=1601524410"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col-estilo">
                      <h3 className="mt-4">Mercado internacional</h3>
                      <p className="mt-5 pt-3">
                        Primer acceso directo al consumidor en el mundo a uno de
                        los las mejores carteras de vinos del mundo.
                      </p>
                      <Button as={NavLink} to="/store" onClick={scrollToTop} className="button-news mt-5">
                        EXPLORA LA GAMA
                      </Button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane className="tab-transition" eventKey="quarter">
                  <TabContent />
                  <Row className="tab-responsive d-flex flex-wrap">
                    <Col className="col-12 p-0 col-sm-12 col-xl-6">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/1504/5726/files/hp-collections-4-01oct20.jpg?v=1601524426"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col-estilo">
                      <h3 className="mt-4">Exclusivas colectivas</h3>
                      <p className="mt-5 pt-3">
                        Vinos exclusivos de algunos de los más emblemáticos y
                        productores venerados solo disponibles para The Wine
                        Collective clientes.
                      </p>
                      <Button as={NavLink} to="/store" onClick={scrollToTop} className="button-news mt-5">
                        VER COLECCIÓN
                      </Button>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default CollectionTable;
