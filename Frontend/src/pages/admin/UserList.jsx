
import axios from 'axios';
import { useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { leerDeLocalStorage } from '../../utils/localStorage';


function UserList(props) {

    const { usuarios } = props;

    const [isLoading, setIsLoading] = useState(false);




    const deleteUser = async (id) => {
        setIsLoading(true);

        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/usuarios/${id}`, { headers });
        await props.getUsers();
        setIsLoading(false);
    };

    const getUser = async (id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        const response = await axios.get(`http://localhost:4000/api/usuarios/${id}`, { headers });
        console.log(response.data)
        setIsLoading(false);
    };



    return (
        <Container>
            <Table striped bordered hover>
                {usuarios.length === 0 ? 'no hay usuarios registrados' :
                    usuarios.map(({ name, email, role, _id }, i) => (
                        <tr key={i}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{role}</td>
                            <td><button onClick={() => getUser(_id)}>Editar</button></td>
                            <td><button onClick={() => deleteUser(_id)} >borrar</button></td>
                        </tr>
                    ))}
            </Table>
            {isLoading && (
                <div
                    style={{ zIndex: 2, backgroundColor: '#00000017' }}
                    className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                    <Spinner animation="border" role="status" />
                </div>
            )}
        </Container>
    )
}

export default UserList
