import axios from 'axios';
import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'

export const ModalEditUser = (props) => {

    const { showModalEditar, closeModal,userFind} = props

    const [input, setInput] = useState({role: userFind.role});

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    }

    // esta consulta no esta andando!! ver que onda, antes andaba pero se cambio el back-
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userFind._id)
        try {
            await axios.put(`http://localhost:4000/api/auth/${userFind._id}`)
            alert('Cambio exitoso');
            closeModal();
            props.getUsers();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Modal
                show={showModalEditar}
                onHide={closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Datos de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="form-register my-5 px-3" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 row align-items-center justify-content-center" >
                            <p>Nombre: {userFind.name}</p>
                            <p>Apellido: {userFind.lastName}</p>
                            <p>Cumpleaños: {userFind.birthday}</p>
                            <label className="col-11 col-md-3 align-items-center">Role</label>
                            <input
                                className="col-11 col-md-9 form-input"
                                name="lastName"
                                defaultValue={userFind.role}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                required
                            />
                        </Form.Group>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="m-auto btn-tokito " >
                                <h5 className="text-center m-0 py-2  ">Guardar cambios</h5>
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
