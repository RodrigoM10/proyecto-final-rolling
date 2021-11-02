import React from 'react'
import { Container } from 'react-bootstrap'
import { TableMessages } from '../../components/tablesAdmin/TableMessages'

function MessagesList({ messages, getMessages, tableMessages, setTableMessages }) {
    return (
        <Container>
            <h2 className="title-style my-2">Mensajes de clientes</h2>
            <TableMessages messages={messages} getMessages={getMessages} tableMessages={tableMessages} setTableMessages={setTableMessages} />
        </Container>
    )
}

export default MessagesList
