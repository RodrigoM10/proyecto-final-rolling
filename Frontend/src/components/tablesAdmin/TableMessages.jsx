import axios from 'axios';
import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { FaHistory } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc'
import { leerDeLocalStorage } from '../../utils/localStorage';


export const TableMessages = ({ messages, getMessages }) => {



    const [isLoading, setIsLoading] = useState(false);

    // trae de la API por usuario para borrar.
    const deleteMessage = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/mensajes/${_id}`, { headers });
        await getMessages();
        setIsLoading(false);
    };

    const refreshMessages = async () => {
        setIsLoading(true);
        await getMessages();
        setIsLoading(false);
    };

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center my-2">
                <form className="search-form" >
                    <div className="input-group mb-3 border-0">
                        <span
                            className="search-icon"
                            id="basic-addon1"><VscSearch /></span>
                        <input
                            type="text"
                            className="col-11 search-input"
                            placeholder="Buscar"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </form>
                <button onClick={() => refreshMessages()} className=" btn-admin">
                    <h5 className="m-0 py-2 "><FaHistory /></h5>
                </button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center " >
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Mensaje</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                {messages.length === 0 ? 'no hay mensajes registrados' :
                    messages.map(({ senderName, senderEmail, message, _id }, i) => (
                        <tbody className="text-center ">
                            <tr className key={i}>
                                <td>{senderName}</td>
                                <td>{senderEmail}</td>
                                <td>{message}</td>
                                <td>
                                    <button className="m-auto btn-admin" onClick={() => deleteMessage(_id)} >Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
            </Table>

        </Container>
    )
}
