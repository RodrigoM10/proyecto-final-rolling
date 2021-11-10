import axios from 'axios';
import React, { useState } from 'react'
import { Container, OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import { AiFillEye } from 'react-icons/ai';
import { FaEraser, FaHistory, FaRegEdit } from 'react-icons/fa';
import { VscSearch } from 'react-icons/vsc';
import swal from 'sweetalert';
import { leerDeLocalStorage } from '../../utils/localStorage';
import { SpinnerRW } from '../spinner/SpinnerRW';
import { ModalViewSale } from './ModalViewSale';

export const TableSales = ({ getSales, sales, tableSales, setTablesSales }) => {
    console.log("🚀 ~ file: TableSales.jsx ~ line 13 ~ TableSales ~ tableSales", tableSales)


    const [isLoading, setIsLoading] = useState(false);
    const [saleFind, setSaleFind] = useState({});


    const [showModalViewSale, setShowModalViewSale] = useState(false);

    const handleCloseModalViewSale = () => setShowModalViewSale(false);
    const handleShowModalViewSale = () => setShowModalViewSale(true);

    const findSale = async (_id) => {
        setIsLoading(true)
        const response = await axios.get(`http://localhost:4000/api/usuarios/${_id}`);
        setSaleFind(response.data);
        setIsLoading(false);
        handleShowModalViewSale();
    }

    const alertaBorrar = (_id) => {
        swal({
            title: "Esta seguro?",
            text: "Se perdera el dato de la compra... asegurese bien",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteSale(_id)
                }
            });
    }
    // trae de la API por venta para borrar.
    const deleteSale = async (_id) => {
        setIsLoading(true);
        const tokenLocal = leerDeLocalStorage('token') || {};
        const headers = { 'x-auth-token': tokenLocal.token };
        await axios.delete(`http://localhost:4000/api/ventas/${_id}`, { headers });
        await getSales();
        setIsLoading(false);
    };

    const refreshSales = async () => {
        setIsLoading(true);
        await getSales();
        setIsLoading(false);
    };


    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center my-2">
                <form className="search-form  " >
                    <div className="input-group search-table">
                        <span
                            className="search-icon"
                            id="basic-addon1"><VscSearch /></span>
                        <input
                            // value={busqueda}
                            type="text"
                            className="col-11 search-input"
                            placeholder="Buscar"
                            aria-describedby="basic-addon1"
                        // onChange={filter}
                        />
                    </div>
                </form>
                <button onClick={() => refreshSales()} className=" my-2 p-0 circle-btn">
                    <FaHistory className="p-0  mb-1" />
                </button>
            </div>
            <Table bordered hover>
                <thead>
                    <tr className="text-center " >
                        <th>Cliente</th>
                        <th>Provincia</th>
                        <th>Productos</th>
                        <th>Total</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody >
                    {tableSales.length === 0 ? <tr>No hay ventas registradas</tr> :
                        tableSales.map(({
                            buyerData: {
                                buyerEmail
                            },
                            buyerShipping: {
                                buyerState
                            },
                            productsList

                            , _id }, i) => (
                            <tr className="text-center " key={i}>
                                <td>{buyerEmail}</td>
                                <td>{buyerState}</td>
                                <td>{productsList.map(({ producto, quantity }) => (
                                    <>
                                        <p>Nombre:{producto.name}</p>
                                        <p>Precio:{producto.price}</p>
                                    </>
                                ))}
                                </td>
                                {/* <td>{message}</td> */}
                                <td>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            (props) => (
                                                <Tooltip id="button-tooltip" {...props}>
                                                    Editar Usuario
                                                </Tooltip>)
                                        }
                                    >
                                        <button className="m-auto circle-btn" onClick={() => findSale(_id)} ><AiFillEye className="mb-1" /></button>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            (props) => (
                                                <Tooltip id="button-tooltip" {...props}>
                                                    Eliminar Mensaje
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

            <ModalViewSale
                closeModal={handleCloseModalViewSale}
                showModalViewSale={showModalViewSale}
                saleFind={saleFind}
                getSales={getSales}
            />

            {isLoading && (
                <SpinnerRW />
            )}

        </Container>
    )
}
