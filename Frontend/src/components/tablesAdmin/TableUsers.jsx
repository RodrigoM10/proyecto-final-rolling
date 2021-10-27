import axios from 'axios';
import { useState } from 'react'
import { Table } from 'react-bootstrap';
import { FaEraser, FaHistory, FaRegEdit } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerRW } from '../spinner/SpinnerRW';
import { ModalEditUser } from './ModalEditUser';

export const TableUsers = ({ usuarios, getUsers, tableUsers, setTableUsers }) => {

    const [isLoading, setIsLoading] = useState(false);

    const [userFind, setfindUser] = useState({});

    const [showModalEditar, setShowModalEditar] = useState(false);


    const handleCloseModalEditar = () => setShowModalEditar(false);
    const handleShowModalEditar = () => setShowModalEditar(true);

    // funcion para encontrar usuario y mostrar usuario
    const findUser = async (_id) => {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:4000/api/usuarios/${_id}`);
        setfindUser(response.data);
        setIsLoading(false);
        console.log(response.data._id);
        handleShowModalEditar();
    };

    // trae de la API por usuario para borrar.
    const deleteUser = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/usuarios/${_id}`, { headers });
        await getUsers();
        setIsLoading(false);
    };

    const refreshUsers = async () => {
        setIsLoading(true);
        await getUsers();
        setIsLoading(false);
    };


    // Funcion de busqueda
    const [busqueda, setBusqueda] = useState('');
    const filter = (e) => {
        e.preventDefault();
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = usuarios.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase())
                    || user.email.toLowerCase().startsWith(keyword.toLowerCase())
                    || user.role.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setTableUsers(results);
        } else {
            setTableUsers(usuarios);
            // If the text field is empty, show all users
        }
        setBusqueda(keyword);
    };


    return (
        <div>
            <div className="d-flex justify-content-between align-items-center my-2">
                <form className="search-form  " >
                    <div className="input-group mb-3 search-table">
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
                <button onClick={() => refreshUsers()} className=" my-2 p-0 circle-btn">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center" >
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableUsers.length === 0 ? <tr>'No hay usuarios registrados'</tr> :
                        tableUsers.map(({ name, email, role, _id }, i) => (
                            <tr className="text-center" key={i}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{role}</td>
                                <td className="p-1 d-flex ">
                                    <button className="m-auto circle-btn" onClick={() => findUser(_id)} ><FaRegEdit className="mb-1" /></button>
                                    <button className="m-auto circle-btn" onClick={() => deleteUser(_id)} ><FaEraser className="mb-1" /></button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>

            {/* le pasamos las props al modal para que disponga de ellas */}
            <ModalEditUser
                closeModal={handleCloseModalEditar}
                showModalEditar={showModalEditar}
                findUser={findUser}
                userFind={userFind}
                getUsers={getUsers}
            />

            {isLoading && (
    <SpinnerRW />
            )}
        </div>
    )
}