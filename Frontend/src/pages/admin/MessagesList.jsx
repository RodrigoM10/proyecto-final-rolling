import React from 'react'
import { TableMessages } from '../../components/tablesAdmin/TableMessages'

function MessagesList({messages, getMessages}) {
    return (
        <TableMessages messages={messages} getMessages={getMessages} />
    )
}

export default MessagesList
