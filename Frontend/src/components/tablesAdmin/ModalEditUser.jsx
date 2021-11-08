import axios from 'axios';
import moment from 'moment';
import 'moment/locale/es';
import swal from 'sweetalert'
import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'

export const ModalEditUser = (props) => {

    const { showModalEditar, closeModal, userFind, getUsers } = props

    const [input, setInput] = useState({ role: userFind.role });

    const birthdayUser = new Date(userFind.birthday);
    const day = birthdayUser.getUTCDate();
    const month = birthdayUser.getUTCMonth();
    const year = birthdayUser.getUTCFullYear();

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    }

    // esta consulta no esta andando!! ver que onda, antes andaba pero se cambio el back-
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(userFind._id)
        try {
            // es importante tocar colocar el input, por que el back toma el "input" como el body
            await axios.put(`http://localhost:4000/api/auth/${userFind._id}`, input)
            swal("Cambio exitoso", `El usuario ahora es ${userFind.role === 'admin' ? 'Cliente' : 'Administrador'}`, "success");
            closeModal();
            getUsers();
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
                    <Form className="form-register px-3" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 row align-items-center justify-content-start" >
                            <p>Nombre: {userFind.name}</p>
                            <p>Apellido: {userFind.lastName}</p>
                            <p>
                                {userFind.role === 'admin' ? "Administrador " : "Cliente "}
                                {moment(userFind.register).fromNow()}</p>
                            <p>Cumpleaños: {day}/{month + 1}/{year}</p>
                            <label className="col-11 col-md-3 align-items-center label-role">Role:</label>
                            <select name="role" onChange={(e) => handleChange(e)} className="col-11 col-md-9 form-input-editUser" required>
                                <option value=""></option>
                                <option value="user">Cliente</option>
                                <option value="admin">Administrador</option>
                            </select>
                        </Form.Group>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="m-auto btn-admin " >
                                <h5 className="text-center m-0 py-2  ">Guardar cambios</h5>
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
