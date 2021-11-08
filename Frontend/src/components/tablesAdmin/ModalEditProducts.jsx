import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import swal from "sweetalert";

export default function ModalEditProducts(props) {
  const { showModalEditar, closeModal, productFind } = props;
  const [input, setInput] = useState({ name: productFind.name, description: productFind.description, image: productFind.image, background: productFind.background, category: productFind.category, price: productFind.price, discount: productFind.discount  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(e.target);
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      // es importante tocar colocar el input, por que el back toma el "input" como el body
      await axios.put(`http://localhost:4000/api/productos/${productFind._id}`, input)
      swal("Producto modificado");
      closeModal();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Modal show={showModalEditar} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-register px-3" onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3 row">
              <Form.Label className="col-12 col-md-3">Nombre:</Form.Label>
              <input
                className="col-12 col-md-9"
                name="name"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                defaultValue={productFind.name}
              />
            </Form.Group>
            <Form.Group className="mb-3 row" controlId="description">
              <Form.Label className="col-12 col-md-3">Descripcion:</Form.Label>
              <input
                className="col-12 col-md-9"
                name="description"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                defaultValue={productFind.description}
              />
            </Form.Group>
            <Form.Group className="mb-3 row" controlId="image">
              <Form.Label className="col-12 col-md-3">Imagen:</Form.Label>
              <input
                className="col-12 col-md-9"
                name="image"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                defaultValue={productFind.image}
              />
            </Form.Group>
            <Form.Group className="mb-3 row" controlId="background">
              <Form.Label className="col-12 col-md-3">Imagen fondo:</Form.Label>
              <input
                className="col-12 col-md-9"
                name="background"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                defaultValue={productFind.background}
              />
            </Form.Group>
            <Form.Group className="mb-3 row" controlId="category">
              <Form.Label className="col-12 col-md-3">Categoria:</Form.Label>
              <input
                className="col-12 col-md-9"
                name="category"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                defaultValue={productFind.category}
              />
            </Form.Group>
            <Form.Group className="mb-3 row" controlId="price">
              <Form.Label className="col-12 col-md-3">Precio:</Form.Label>
              <input
                className="col-12 col-md-9"
                name="price"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                defaultValue={productFind.price}
              />
            </Form.Group>
            <Form.Group className="mb-3 row" controlId="discount">
              <Form.Label className="col-12 col-md-3">Precio:</Form.Label>
              <input
                className="col-12 col-md-9"
                name="discount"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                defaultValue={productFind.discount}
              />
            </Form.Group>
            <hr />
            <div className="d-flex justify-content-center">
              <button type="submit" className="m-auto btn-admin ">
                <h5 className="text-center m-0 py-2  ">Guardar cambios</h5>
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
