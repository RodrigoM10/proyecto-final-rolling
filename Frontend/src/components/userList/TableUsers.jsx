import axios from 'axios';
import { useState } from 'react'
import { Spinner, Table } from 'react-bootstrap';
import { FaEraser, FaHistory, FaRegEdit } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { ModalEditUser } from './ModalEditUser';



export const TableUsers = (props) => {

    const { usuarios, getUsers } = props;

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
        await props.getUsers();
        setIsLoading(false);
    };

    const refreshUsers = async () => {
        setIsLoading(true);
        await props.getUsers();
        setIsLoading(false);
    };


    return (
        <div>
            <div className="d-flex justify-content-between align-items-center my-2">
                <form className="search-form">
                    <div className="input-group my-2 border-0">
                        <button
                            type="submit"
                            className="search-icon"
                            id="basic-addon1">
                            <VscSearch />
                        </button>
                        <input
                            type="text"
                            className="col-11 search-input"
                            placeholder="Buscar"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </form>
                <button onClick={() => refreshUsers()} className=" btn-admin">
                    <h5 className="m-0 py-2 "><FaHistory /></h5>
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
                {usuarios.length === 0 ? 'no hay usuarios registrados' :
                    usuarios.map(({ name, email, role, _id }, i) => (
                        <tbody className="text-center ">
                            <tr className key={i}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{role}</td>
                                <td className="p-1 d-flex ">
                                    <button className="m-auto btn-tokito" onClick={() => findUser(_id)} ><FaRegEdit className="mb-1" /></button>
                                    <button className="m-auto btn-tokito" onClick={() => deleteUser(_id)} ><FaEraser className="mb-1" /></button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
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
                <div
                    style={{ zIndex: 2, backgroundColor: '#00000017' }}
                    className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                    <Spinner animation="border" role="status" />
                </div>
            )}
        </div>
    )
}