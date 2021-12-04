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
  }, []);

  return (
    <div>
      <Container className="text-center">
        <h3 data-aos="fade-up" className="collection-tilulo ">
          VER TODOS LOS PERSONAJES
        </h3>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row data-aos="fade-up" className="mt-5 ">
            <Col sm={3} className="p-0 col-sm-12 col-xl-3">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="first">
                    SUPERMAN
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="second">
                    BATMAN
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="third">
                    WONDER WOMAN
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="tab-itemStyle d-flex" eventKey="quarter">
                    AQUAMAN
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
                        src="https://www.dccomics.com/sites/default/files/styles/whos_who/public/Char_WhosWho_Superman_20190116_5c3fc71f524f38.28405711.jpg?itok=U9inHc9Q"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col col-estilo col-sm-12 col-xl-6">
                      <p className="mt-5 pt-3">
                        Más rápido que una bala veloz, más poderoso que una
                        locomotora ... El Hombre de Acero libra una batalla
                        interminable por la verdad, la justicia y el estilo
                        estadounidense.
                      </p>
                      <Button
                        as={NavLink}
                        to="/store"
                        onClick={scrollToTop}
                        className="button-news mt-5"
                      >
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
                        src="https://www.dccomics.com/sites/default/files/styles/whos_who/public/Char_WhosWho_Batman_20190116_5c3fc4b40faf04.59002472.jpg?itok=deXetO0x"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col-estilo">
                      <p className="mt-5 pt-3">
                        En nombre de sus padres asesinados, Bruce Wayne libra la
                        guerra eterna contra los criminales de Gotham City. El
                        es la venganza. El es la noche. El es Batman.
                      </p>
                      <Button
                        as={NavLink}
                        to="/store"
                        onClick={scrollToTop}
                        className="button-news mt-5"
                      >
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
                        src="https://www.dccomics.com/sites/default/files/styles/whos_who/public/Char_WhosWho_WonderWoman_20190116_5c3fc6aa51d124.25659603.jpg?itok=5aBydSqj"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col-estilo">
                      <p className="mt-5 pt-3">
                        Bella como Afrodita, sabia como Atenea, más rápida que
                        Hermes y más fuerte que Hércules, la princesa Diana de
                        Themyscira lucha por la paz en el mundo del hombre.
                      </p>
                      <Button
                        as={NavLink}
                        to="/store"
                        onClick={scrollToTop}
                        className="button-news mt-5"
                      >
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
                        src="https://www.dccomics.com/sites/default/files/styles/whos_who/public/Char_WhosWho_Aquaman_5c411a95e710b9.62155274.jpg?itok=28sG_KbH"
                        fluid
                      />
                    </Col>
                    <Col className="p-5 col-estilo">
                      <p className="mt-5 pt-3">
                        Hijo de un farero y una reina atlante, Arthur Curry es
                        el puente entre el mundo de la superficie y su
                        tumultuoso reino del mar.
                      </p>
                      <Button
                        as={NavLink}
                        to="/store"
                        onClick={scrollToTop}
                        className="button-news mt-5"
                      >
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
