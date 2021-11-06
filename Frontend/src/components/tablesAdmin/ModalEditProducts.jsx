import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import swal from "sweetalert";

export default function ModalEditProducts(props) {
  const { showModalEditar, closeModal, productFind } = props;
  const [input, setInput] = useState(productFind);
  console.log(input);
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
        await axios.put(`http://localhost:4000/api/productos/${productFind._id}`, input )
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
            <Form.Group controlId="name">
              <Form.Label>Nombre:</Form.Label>
              <input
                name="name"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                placeholder={productFind.name}
              />
            </Form.Group>
            <Form.Group className="mt-3" controlId="description">
              <Form.Label>Descripcion:</Form.Label>
              <input
                name="description"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                placeholder={productFind.description}
              />
            </Form.Group>
            <Form.Group className="mt-3" controlId="image">
              <Form.Label>Imagen:</Form.Label>
              <input
                name="image"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                placeholder={productFind.image}
              />
            </Form.Group>
            <Form.Group className="mt-3" controlId="background">
              <Form.Label>Imagen fondo:</Form.Label>
              <input
                name="background"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                placeholder={productFind.background}
              />
            </Form.Group>
            <Form.Group className="mt-3" controlId="category">
              <Form.Label>Categoria:</Form.Label>
              <input
                name="category"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                placeholder={productFind.category}
              />
            </Form.Group>
            <Form.Group className="mt-3" controlId="price">
              <Form.Label>Precio:</Form.Label>
              <input
                name="price"
                onChange={(e) => handleChange(e)}
                required
                type="text"
                placeholder={productFind.price}
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
