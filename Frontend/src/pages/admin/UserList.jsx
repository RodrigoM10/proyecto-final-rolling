
import { Container } from 'react-bootstrap';
import { TableUsers } from '../../components/userList/TableUsers';


function UserList(props) {

    const { usuarios, getUsers } = props;

    return (
        <Container>
            <TableUsers getUsers={getUsers} usuarios={usuarios}/>
        </Container>
    )
}

export default UserList
