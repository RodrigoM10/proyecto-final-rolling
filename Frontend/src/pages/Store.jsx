import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import CardProductos from "../components/CardProductos";

function Store() {
  return (
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>
          <CardProductos />
        </Col>
      </Row>
    </Container>
  );
}

export default Store;
