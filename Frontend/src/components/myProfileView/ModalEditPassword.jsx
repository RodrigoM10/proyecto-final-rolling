import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { AiOutlineCheck } from 'react-icons/ai';
import swal from 'sweetalert';


export const ModalEditPassword = ({ showModalPassword, closeModal, user, requestUserData }) => {
    const [input, setInput] = useState({ name: user.password });


    const errorLink = () => {
        swal("Oops!", "Todavia estamos trabajando en esta funcionalidad :(", "error");
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://proyecto-final-db.herokuapp.com/api/usuarios/${user._id}`, input);
            alert('Cambio de contraseña exitoso');
            await requestUserData();
            closeModal();
        } catch (error) {
            console.error(error);
        }
    }

    const handleSumitVerify = async (e) => {
        errorLink();
    }

    return (

        <Modal
            show={showModalPassword}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title>Configurar Contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body
            >
                <Form className="form-register my-5 px-3" onSubmit={handleSubmit}>
                    <Form.Group
                        onSubmit={handleSumitVerify} >
                        <Form.Group className="mb-3 row align-items-center justify-content-center">
                            <label className="text-center mb-1">Contraseña Actual</label>
                            <input
                                placeholder="Escriba su contraseña actual..."
                                className="col-9 form-input"
                                name="name"
                                type="password"
                                required
                                onChange={(e) => handleChange(e)}
                            />
                            <Form.Control.Feedback>Cambia tu contraseña !</Form.Control.Feedback>
                            <Button variant="outline-success" className="col-2 p-1 ms-1" onClick={errorLink}><AiOutlineCheck /></Button>
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className="mb-3 row align-items-center justify-content-center">
                        <label className="text-center mb-1">Contraseña Nueva</label>
                        <input
                            placeholder="Escriba su nueva contraseña"
                            className="col-11 form-input"
                            name="name"
                            type="password"
                            required
                            onChange={(e) => handleChange(e)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between aling-items-center">
                <button className="m-auto btn-admin "  onClick={errorLink}>
                    <h5 className="text-center m-0 py-2  ">Cambiar Contraseña</h5>
                </button>
            </Modal.Footer>
            <Modal.Footer> <span>¿Olvidaste tu contraseña?</span></Modal.Footer>
        </Modal>
    )
}
