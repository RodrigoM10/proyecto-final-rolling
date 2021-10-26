import axios from 'axios';
import React, { useState } from 'react'
import { Container, Spinner, Table } from 'react-bootstrap'
import { FaHistory } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc'
import { leerDeLocalStorage } from '../../utils/localStorage';

export const TableProducts = ({ productos, getProductos, tableProducts, setTableProducts }) => {


    const [isLoading, setIsLoading] = useState(false);

    // trae de la API por usuario para borrar.
    const deleteProducto = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/productos/${_id}`, { headers });
        await getProductos();
        setIsLoading(false);
    };

    const refreshProductos = async () => {
        setIsLoading(true);
        await getProductos();
        setIsLoading(false);
    };

    // Funcion de busqueda
    const [busqueda, setBusqueda] = useState('');
    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = productos.filter((prod) => {
                return prod.name.toLowerCase().startsWith(keyword.toLowerCase())
                    || prod.category.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setTableProducts(results);
        } else {
            setTableProducts(productos);
            // If the text field is empty, show all users
        }
        setBusqueda(keyword);
    };

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center my-2">
                <form className="search-form  " >
                    <div className="input-group mb-3 search-table">
                        <span
                            className="search-icon"
                            id="basic-addon1"><VscSearch /></span>
                        <input
                            value={busqueda}
                            type="text"
                            className="col-11 search-input"
                            placeholder="Buscar"
                            aria-describedby="basic-addon1"
                            onChange={filter}
                        />
                    </div>
                </form>
                <button onClick={() => refreshProductos()} className=" my-2 p-0 circle-btn">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center " >
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                {tableProducts.length === 0 ? 'no hay productos registrados' :
                    tableProducts.map(({ name, price, category, _id }, i) => (
                        <tbody className="text-center" key={i}>
                            <tr >
                                <td>{name}</td>
                                <td>$ {price}</td>
                                <td>{category}</td>
                                <td>
                                    <button className="m-auto btn-admin" onClick={() => deleteProducto(_id)} >Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
            </Table>

            {isLoading && (
                <div
                    style={{ zIndex: 2, backgroundColor: '#00000017' }}
                    className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center">
                    <Spinner animation="border" role="status" />
                </div>
            )}

        </Container>
    )
}
