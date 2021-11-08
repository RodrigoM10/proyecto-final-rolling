import axios from 'axios';
import React, { useState } from 'react'
import swal from 'sweetalert';
import { Container, OverlayTrigger, Table, Tooltip } from 'react-bootstrap'
import { FaEraser, FaHistory, FaRegEdit } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc'
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerRW } from '../spinner/SpinnerRW';
import CargaProduts from './CargaProducts';
import ModalEditProducts from './ModalEditProducts';

export const TableProducts = ({ productos, getProductos, tableProducts, setTableProducts }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [productFind, setProductFind] = useState({});
    const [showModalEditar, setShowModalEditar] = useState(false);

    const closeModalEditar = () => setShowModalEditar(false);
    const handleShowModalEditar = () => setShowModalEditar(true);


    const findProduct = async (_id) => {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:4000/api/productos/${_id}`);
        setProductFind(response.data);
        setIsLoading(false);
        handleShowModalEditar();
    };

    const alertaBorrar = (_id) => {
        swal({
            title: "Esta seguro?",
            text: "Una vez que elimine el producto ya no aparecerá en el  landing",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteProduct(_id)
                }
            });
    }
    // trae de la API por producto para borrar.
    const deleteProduct = async (_id) => {
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
                return prod.name.toLowerCase().includes(keyword.toLowerCase())
                    || prod.category.toLowerCase().includes(keyword.toLowerCase());
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
        <>
        <CargaProduts getProductos={getProductos} />
        <Container>
            <div className="d-flex justify-content-between align-items-center my-2">
                <form className="search-form  " >
                    <div className="input-group search-table">
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
            <Table bordered hover>
                <thead>
                    <tr className="text-center " >
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody >
                {tableProducts.length === 0 ? <tr>'No hay productos registrados'</tr>:
                    tableProducts.map(({ name, price, category, _id }, i) => (
                            <tr className="text-center" key={i}>
                                <td>{name}</td>
                                <td>$ {price}</td>
                                <td>{category}</td>
                                <td className="p-1 d-flex ">
                                <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            (props) => (
                                                <Tooltip id="button-tooltip" {...props}>
                                                    Editar Producto
                                                </Tooltip>)
                                        }
                                    >
                                    <button className="m-auto circle-btn" onClick={() => findProduct(_id)} ><FaRegEdit className="mb-1" /></button>
                                    </OverlayTrigger>
                                <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            (props) => (
                                                <Tooltip id="button-tooltip" {...props}>
                                                    Eliminar Producto
                                                </Tooltip>)
                                        }
                                    >
                                        <button className="m-auto circle-btn" onClick={() => alertaBorrar(_id)} ><FaEraser className="mb-1" /></button>
                                    </OverlayTrigger>
                                </td>
                            </tr>
                    ))}
                    </tbody>
            </Table>

            {isLoading && (
                <SpinnerRW />
            )}
            <ModalEditProducts 
            closeModal={closeModalEditar}
            showModalEditar={showModalEditar}
            productFind={productFind}
            getProductos={getProductos}
         />
        </Container>
        </>
    )
}
