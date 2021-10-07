import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardProductos.css";

export default function CardProductos() {
  return (
    <div className="Productos santiago">
      <Card style={{ width: "21rem" }}>
        <div className="imagenesProducto mt-3 d-flex">
          <Card.Img
            className="m-2"
            style={{ width: "4rem" }}
            variant="top"
            src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_badges/v2/95-TS.svg"
          />
          <Card.Img
            style={{ width: "11.5rem" }}
            variant="top"
            src="https://cdn.shopify.com/s/files/1/1504/5726/products/OLG301492_x400.png"
          />
          <Card.Img
            style={{ width: "6rem" }}
            variant="top"
            src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_icons/v2/instock-icon.svg"
          />
        </div>
        <Card.Body>
          <Card.Title className="descripcionProducto mt-1 text-center">
            NV Marcel Martin Tete du Cuvee Cremant de Loire
          </Card.Title>
          <Card.Text className="precioSinDescuento mt-5 text-center">
            RRP: $42.99
          </Card.Text>
          <Card.Text className="text-center precioConDescuento">
            $24.99
          </Card.Text>
          <Card.Text className="text-center">PER BOTTLE</Card.Text>
          <div className="d-flex">
            <Button className="agregarCarrito">ADD TO CART</Button>
            <Button className="heart"></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
