
import { Container } from 'react-bootstrap';
import { TableUsers } from '../../components/tablesAdmin/TableUsers';

function UserList(props) {

    const { usuarios, getUsers, setTableUsers, tableUsers } = props;

    return (
        <Container>
            <div className="user-list my-2">
                <h2>Usuarios con Membrecia</h2>
            </div>
            <TableUsers getUsers={getUsers} usuarios={usuarios} setTableUsers={setTableUsers} tableUsers={tableUsers}/>
        </Container>
    )
}

export default UserList
