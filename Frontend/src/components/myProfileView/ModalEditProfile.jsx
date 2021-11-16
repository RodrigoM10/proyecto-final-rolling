import axios from 'axios';
import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import swal from 'sweetalert'



export const ModalEditProfile = ({ showModalEditar, closeModal, user, requestUserData }) => {    
        const birthdayUser = new Date(user.birthday);
        const day = birthdayUser.getUTCDate();
        const month = birthdayUser.getUTCMonth();
        const year = birthdayUser.getUTCFullYear();
        const birthdayFormat = `${year}-${month + 1}-${day}`;
    
    const [input, setInput] = useState({ name: user.name, lastName: user.lastName, email: user.email, birthday: birthdayFormat});


    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             await axios.put(`https://proyecto-final-db.herokuapp.com/api/usuarios/${user._id}`, input);
             swal("Perfil editado con exito", "", "success");
            await requestUserData();
            closeModal();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Modal
            show={showModalEditar}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title>Datos de Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body
            >
                <Form className="form-register my-5 px-3" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 row align-items-center justify-content-center" >
                        <label className="col-11 col-md-3">Nombre </label>
                        <input
                            className="col-11 col-md-9 form-input"
                            name="name"
                            defaultValue={user.name}
                            onChange={(e) => handleChange(e)}
                            type="text"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 row align-items-center justify-content-center" >
                        <label className="col-11 col-md-3 align-items-center">Apellido</label>
                        <input
                            className="col-11 col-md-9 form-input"
                            name="lastName"
                            defaultValue={user.lastName}
                            onChange={(e) => handleChange(e)}
                            type="text"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 row align-items-center justify-content-center" >
                        <label className="col-11 col-md-3 align-items-center">Email</label>
                        <input
                            className="col-11 col-md-9 form-input"
                            name="email"
                            onChange={(e) => handleChange(e)}
                            defaultValue={user.email}
                            type="email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 row align-items-center justify-content-center" >
                        <label className="col-11 col-md-3">Nacimiento</label>
                        <input
                            className="col-11 col-md-9 text-center"
                            type="date"
                            name="birthday"
                            defaultValue={birthdayFormat}
                            onChange={(e) => handleChange(e)}
                            required
                        />
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
    )
}
