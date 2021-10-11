import React from "react";
import { Button, Card } from "react-bootstrap";

const Cardproducto = ({ producto }) => {
  const { img, descrpcion, precioLista, precioConDescuento } = producto;

  return (
    <div>
      <div className="Productos mx-3">
        <Card style={{ width: "21rem" }}>
          <div className="imagenesProducto mt-3 d-flex">
            <Card.Img
              className="m-2"
              style={{ width: "4rem" }}
              variant="top"
              src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_badges/v2/95-TS.svg"
            />
            <Card.Img style={{ width: "11.5rem" }} variant="top" src={img} />
            <Card.Img
              style={{ width: "5rem" }}
              variant="top"
              src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_icons/v2/instock-icon.svg"
            />
          </div>
          <Card.Body>
            <Card.Title className="descripcionProducto mt-1 text-center">
              {descrpcion}
            </Card.Title>
            <Card.Text className="precioSinDescuento mt-5 text-center">
              RRP: {precioLista}
            </Card.Text>
            <Card.Text className="text-center precioConDescuento">
              {precioConDescuento}
            </Card.Text>
            <Card.Text className="text-center">PER BOTTLE</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cardproducto;
