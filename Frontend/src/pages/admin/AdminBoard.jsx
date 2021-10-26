import React from 'react'
import { TableProducts } from '../../components/tablesAdmin/TableProducts'



function AdminBoard({productos, getProductos, tableProducts, setTableProducts}) {
    return (
    <TableProducts productos={productos} getProductos={getProductos} tableProducts={tableProducts} setTableProducts={setTableProducts}/>
    )
}

export default AdminBoard
