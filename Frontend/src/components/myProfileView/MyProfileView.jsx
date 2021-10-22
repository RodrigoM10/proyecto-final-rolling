import React, { useState } from 'react'
import { Card, Form, ListGroup, Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import './myProfileView.css'

import moment from 'moment';
import 'moment/locale/es';
import { FiSettings } from 'react-icons/fi';
import axios from 'axios';
import { ModalEditProfile } from './ModalEditProfile';
import { ModalEditPassword } from './ModalEditPassword';
moment.locale('es');

export const MyProfileView = ({ user, requestUserData }) => {
    console.log("🚀 ~ file: MyProfileView.jsx ~ line 13 ~ MyProfileView ~ ser", user)
    const [showModalEditar, setShowModalEditar] = useState(false);
    const [showModalPassword, setShowModalPassword] = useState(false);

    const handleCloseModalEditar = () => setShowModalEditar(false);
    const handleShowModalEditar = () => setShowModalEditar(true);

    const handleCloseModalPassword = () => setShowModalPassword(false);
    const handleShowModalPassword = () => setShowModalPassword(true);



    const birthdayUser = new Date(user.birthday);
    const day = birthdayUser.getUTCDate();
    const month = birthdayUser.getUTCMonth();
    const year = birthdayUser.getUTCFullYear();



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
                        <OverlayTrigger
                         trigger="focus" 
                         placement="right"
                          overlay={
                            <Popover id="popover-basic">
                                <Popover.Header as="h3">Configurar Cuenta</Popover.Header>
                                <Popover.Body>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            <button  onClick={handleShowModalPassword}className="btn-config">Cambiar Contraseña</button>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <button className="btn-config">Eliminar Cuenta</button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Popover.Body>
                            </Popover>
                        }>
                            <button className="m-auto my-2 p-0 circle-btn">
                                <FiSettings className="p-0 mb-1" />
                            </button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>

            {user.name && <ModalEditProfile
                closeModal={handleCloseModalEditar}
                user={user}
                showModalEditar={showModalEditar}
                requestUserData={requestUserData}
            />}
            {user.name && <ModalEditPassword
            closeModal={handleCloseModalPassword}
            user={user}
            showModalPassword={showModalPassword}
            requestUserData={requestUserData}
            />}

        </>

    )
}
