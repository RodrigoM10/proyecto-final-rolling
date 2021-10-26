
import { Container } from 'react-bootstrap';
import { TableUsers } from '../../components/userList/TableUsers';


function UserList(props) {

    const { usuarios, getUsers, setTableUsers, tableUsers } = props;

    return (
        <Container>
            <TableUsers getUsers={getUsers} usuarios={usuarios} setTableUsers={setTableUsers} tableUsers={tableUsers}/>
        </Container>
    )
}

export default UserList
