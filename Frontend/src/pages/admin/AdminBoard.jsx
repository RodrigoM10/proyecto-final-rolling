import React from 'react'
import { TableProducts } from '../../components/tablesAdmin/TableProducts'



function AdminBoard({productos, getProductos}) {
    return (
    <TableProducts productos={productos} getProductos={getProductos}/>
    )
}

export default AdminBoard
