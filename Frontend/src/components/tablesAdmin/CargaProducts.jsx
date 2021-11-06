import React from "react";
import {
  Accordion,
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import "./cargaProducts.css";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

export default function CargaProduts(props) {
  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    background: "",
    category: "",
    price: "",
    discount: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    // Extraemos y guardamos en variables, el nombre y el valor del input en el que escribió el usuario.
    // const inputHtml = event.target;
    // const name = inputHtml.name;
    // const value = inputHtml.value;
    const { value, name } = event.target;

    // Declaramos un objeto que contiene una copia de las propiedades del state input,
    // más el dato nuevo ingresado usando el name y value del elemento.
    const newInput = { ...input, [name]: value };
    // Con ese objeto actualizamos el estado.
    setInput(newInput);
    console.log(newInput);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      setIsLoading(true);
      await axios.post("http://localhost:4000/api/productos", input);
      swal("Excelente", "Producto agregado", "success");
      setIsLoading(false);
    }
    event.target.reset();
    setValidated(false);
  };

  return (
    <>
      <Accordion>
        <Accordion.Item className="accordion-buy my-4" eventKey="0">
          <Accordion.Header>
            Cargar Producto
          </Accordion.Header>
          <Accordion.Body className="d-flex">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="formulario-estilo card mt-5 p-5 mx-auto border-0"
              style={{ width: "auto", background: "beige" }}
            >

              <Row>
                <Col className="col-12 col-lg-6">
                  <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      name="name"
                      onChange={(e) => handleChange(e)}
                      required
                      type="text"
                      placeholder="Nombre"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col className="col-12 col-lg-6">
                  <Form.Group controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        name="image"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="http://productos.jpg"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Imagen requerida!
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col className="col-12 col-lg-6">
                  <Form.Group controlId="description">
                    <Form.Label>Descripcion</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        name="description"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder=""
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col className="col-12 col-lg-6">
                  <Form.Group controlId="background">
                    <Form.Label>Imagen detalle</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        name="background"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="http://productos.jpg"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Imagen requerida!
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col className="col-12 col-lg-6">
                  <Form.Group controlId="category">
                    <Form.Label>Categoria</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        name="category"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder=""
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col className="col-12 col-lg-6">
                  <Form.Group controlId="price">
                    <Form.Label>Precio</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        name="price"
                        onChange={(e) => handleChange(e)}
                        type="text"
                        placeholder="$"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="discount">
                <Form.Label>Descuento</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    name="discount"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Row>
                <Button
                  type="submit"
                  className="boton-cargar mx-auto mt-5"
                  disabled={isLoading}
                >
                  Agregar Producto
                  {isLoading && (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  )}
                </Button>
              </Row>
            </Form>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
