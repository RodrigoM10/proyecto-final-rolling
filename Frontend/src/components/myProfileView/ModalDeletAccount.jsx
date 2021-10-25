import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import {  Modal, Spinner } from 'react-bootstrap';
import { leerDeLocalStorage } from '../../utils/localStorage';


export const ModalDeleteAccount = ({ showModalDeleteAccount, closeModal, user}) => {

    const [isLoading, setIsLoading] = useState(false);
    console.log("🚀 ~ file: ModalDeletAccount.jsx ~ line 12 ~ ModalDeleteAccount ~ isLoading", isLoading)
    const history = useHistory();

    // trae de la API por usuario para borrar.
    const deleteUser = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        localStorage.removeItem('token');
        await axios.delete(`http://localhost:4000/api/usuarios/${user._id}`, { headers });
        history.push('/');;
        setIsLoading(false);
        window.location.reload();

    };
    
    return (

        <Modal
            show={showModalDeleteAccount}
            onHide={closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title>¿Esta seguro que desea eliminar su cuenta?</Modal.Title>
            </Modal.Header>
            <Modal.Body
            >
                Al eliminar su cuenta perdera el historial de compras y favoritos
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between aling-items-center">
                <button className="m-auto btn-admin " >
                    <h5 className="text-center m-0 py-2" onClick={() => deleteUser(user._id)} >Eliminar</h5>
                </button>
            </Modal.Footer>
            
            {isLoading && (
                <div
                    style={{ zIndex: 2, backgroundColor: '#00000017' }}
                    className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                    <Spinner animation="border" role="status" />
                </div>
            )}
        </Modal>
    )
}
