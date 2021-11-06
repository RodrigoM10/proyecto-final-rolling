import React from 'react'
import { Container } from 'react-bootstrap'
import { TableProducts } from '../../components/tablesAdmin/TableProducts'



function AdminBoard({ productos, getProductos, tableProducts, setTableProducts }) {
    return (
        <Container>
            <h2 className="title-style my-2">Productos</h2>
            <TableProducts productos={productos} getProductos={getProductos} tableProducts={tableProducts} setTableProducts={setTableProducts} />
        </Container>
    )
}

export default AdminBoard
