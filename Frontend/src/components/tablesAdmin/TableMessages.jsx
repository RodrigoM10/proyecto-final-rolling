import axios from 'axios';
import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { FaHistory } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc'
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerRW } from '../spinner/SpinnerRW';



export const TableMessages = ({ messages, getMessages, tableMessages, setTableMessages }) => {

    const [isLoading, setIsLoading] = useState(false);

    // trae de la API por mensaje para borrar.
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

    // Funcion de busqueda
    const [busqueda, setBusqueda] = useState('');
    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = messages.filter((msj) => {
                return msj.senderName.toLowerCase().startsWith(keyword.toLowerCase())
                    || msj.senderEmail.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setTableMessages(results);
        } else {
            setTableMessages(messages);
            // If the text field is empty, show all users
        }
        setBusqueda(keyword);
    };

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center my-2">
                <form className="search-form  " >
                    <div className="input-group search-table">
                        <span
                            className="search-icon"
                            id="basic-addon1"><VscSearch /></span>
                        <input
                            value={busqueda}
                            type="text"
                            className="col-11 search-input"
                            placeholder="Buscar"
                            aria-describedby="basic-addon1"
                            onChange={filter}
                        />
                    </div>
                </form>
                <button onClick={() => refreshMessages()} className=" my-2 p-0 circle-btn">
                    <FaHistory className="p-0  mb-1" />
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
                <tbody >
                {tableMessages.length === 0 ? <tr>'No hay mensajes registrados'</tr>:
                    tableMessages.map(({ senderName, senderEmail, message, _id }, i) => (
                            <tr className="text-center " key={i}>
                                <td>{senderName}</td>
                                <td>{senderEmail}</td>
                                <td>{message}</td>
                                <td>
                                    <button className="m-auto btn-admin" onClick={() => deleteMessage(_id)} >Eliminar</button>
                                </td>
                            </tr>
                    ))}
                    </tbody>
            </Table>

            {isLoading && (
                <SpinnerRW />
            )}

        </Container>
    )
}
