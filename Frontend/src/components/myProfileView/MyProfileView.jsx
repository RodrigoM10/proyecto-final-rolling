import React, { useState } from 'react'
import { Card, Form, ListGroup, Modal } from 'react-bootstrap'
import './myProfileView.css'

import moment from 'moment';
import 'moment/locale/es';
import { FiSettings } from 'react-icons/fi';
moment.locale('es');

export const MyProfileView = ({ user }) => {
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [showModalContraseña, setShowModalContraseña] = useState(false);

    const handleCloseModalEditar = () => setShowModalEditar(false);
    const handleShowModalEditar = () => setShowModalEditar(true);

    const handleCloseModalContraseña = () => setShowModalContraseña(false);
    const handleShowModalContraseña = () => setShowModalContraseña(true);

    const birthdayUser = new Date(user.birthday);
    const day = birthdayUser.getUTCDate();
    const month = birthdayUser.getUTCMonth();
    const year = birthdayUser.getUTCFullYear();
    console.log(day, month, year);




    return (
        <>
            <div className="card-profile row  ">
                <Card.Img variant="top" className=" col-12 col-lg-6 img-avatar my-2 mx-auto" src={user.image} />
                <div className="col-12 col-lg-6  d-flex flex-column aling-items-between card-body-container mx-auto">
                    <Card.Body>
                        <Card.Title className="text-center my-3">{user.name} {user.lastName}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cumpleaños: {day}/{month + 1}/{year}</ListGroup.Item>
                            <ListGroup.Item>
                                {user.role === 'admin' ? "Administrador " : "Cliente "}
                                {moment(user.register).fromNow()}
                            </ListGroup.Item>
                            <ListGroup.Item>{user.email}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <div className="my-2 d-flex justify-content-end">
                        <button className="m-auto btn-tokito " onClick={handleShowModalEditar}>
                            <h5 className="text-center m-0 py-2  ">Editar perfil</h5>
                        </button>
                        <button className="m-auto my-2 p-0 circle-btn">
                            <FiSettings className="p-0 mb-1" />
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                show={showModalEditar}
                onHide={handleCloseModalEditar}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Datos de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body
                >
                    <Form className="form-register my-5 px-3">
                        <Form.Group className="mb-3 row align-items-center justify-content-center" >
                            <label className="col-11 col-md-3">Nombre </label>
                            <input
                                className="col-11 col-md-9 form-input"
                                name="name"
                                // value={user.name}
                                // onChange={(e) => handleChange(e)}
                                type="text"
                                placeholder={user.name}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 row align-items-center justify-content-center" >
                            <label className="col-11 col-md-3 align-items-center">Apellido</label>
                            <input
                                className="col-11 col-md-9 form-input"
                                name="lastName"
                                placeholder={user.lastName}

                                // onChange={(e) => handleChange(e)}
                                type="text"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 row align-items-center justify-content-center" >
                            <label className="col-11 col-md-3 align-items-center">Email</label>
                            <input
                                className="col-11 col-md-9 form-input"
                                name="email"
                                placeholder={user.email}
                                // onChange={(e) => handleChange(e)}
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
                                // onChange={(e) => handleChange(e)}
                                required
                            />
                        </Form.Group>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <button className="m-auto btn-tokito " >
                                <h5 className="text-center m-0 py-2  ">Guardar cambios</h5>
                            </button>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between aling-items-center">
                    <button className="m-auto btn-tokito " onClick={handleShowModalContraseña} >
                        <h5 className="text-center m-0 py-2  ">Cambiar Contraseña</h5>
                    </button>
                    <button className="m-auto my-2 p-0 circle-btn">
                        <FiSettings className="p-0 mb-1" />
                    </button>

                </Modal.Footer>
            </Modal>

            {/* Modal cambiar contraseña */}

            <Modal
                show={showModalContraseña}
                onHide={handleCloseModalContraseña}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Datos de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body
                >
                    <Form className="form-register my-5 px-3">
                        <Form.Group className="mb-3 row align-items-center justify-content-center">
                            <label className="col-11 col-md-3">Contraseña actual </label>
                            <input
                                className="col-11 col-md-9 form-input"
                                name="name"
                                type="password"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 row align-items-center justify-content-center">
                            <label className="col-11 col-md-3">Contraseña Nueva</label>
                            <input
                                className="col-11 col-md-9 form-input"
                                name="name"
                                type="password"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 row align-items-center justify-content-center">
                            <label className="col-11 col-md-3">Confirmar Contraseña Nueva</label>
                            <input
                                className="col-11 col-md-9 form-input"
                                name="name"
                                type="password"
                                required
                            />
                        </Form.Group>
  
                    </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between aling-items-center">
                    <button className="m-auto btn-tokito " >
                        <h5 className="text-center m-0 py-2  " onClick={handleCloseModalContraseña}>Cambiar Contraseña</h5>
                    </button>
                </Modal.Footer>
                <Modal.Footer> <span>¿Olvidaste tu contraseña?</span></Modal.Footer>
            </Modal>




        </>

    )
}
