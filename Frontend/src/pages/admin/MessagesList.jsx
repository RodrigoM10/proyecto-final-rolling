import React from 'react'
import { TableMessages } from '../../components/tablesAdmin/TableMessages'

function MessagesList({messages, getMessages,  tableMessages, setTableMessages}) {
    return (
        <TableMessages messages={messages} getMessages={getMessages} tableMessages={tableMessages} setTableMessages={setTableMessages} />
    )
}

export default MessagesList
