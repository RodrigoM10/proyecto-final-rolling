import { Container } from 'react-bootstrap';
import { TableUsers } from '../../components/tablesAdmin/TableUsers';

function UserList({ usuarios, getUsers, setTableUsers, tableUsers, user }) {
    return (
        <Container>
                <h2 className="title-style my-2">Usuarios con Membrecia</h2>
            <TableUsers getUsers={getUsers} usuarios={usuarios} setTableUsers={setTableUsers} tableUsers={tableUsers} user={user}/>
        </Container>
    )
}

export default UserList
