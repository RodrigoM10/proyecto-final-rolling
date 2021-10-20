import React from 'react'
import { Container } from 'react-bootstrap'
import './myProfileView.css'

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export const MyProfileView = ({ user }) => {

    const birthdayUser = new Date(user.birthday);
    const day = birthdayUser.getUTCDate();
    const month = birthdayUser.getUTCMonth();
    const year = birthdayUser.getUTCFullYear();
    console.log(day, month, year);

    // const today = new Date().valueOf();
    // const registerDate = new Date(user.register);

    return (
        <section className="row  row-cols-1 ">
            <div className="text-welcome-register d-flex flex-column aling-items-center">
                <div >
                    <img src="https://tse1.mm.bing.net/th?id=OIP.G8Gk-XqQrSYmGl6I7WG-2gHaHa&pid=Api&P=0&w=300&h=300" alt="" className="img-avatar " />
                    {/* <button><RiEditCircleFill/></button> */}
                </div>
                <h5 className="text-center my-3">{user.name} {user.lastName} </h5>
                <span>Cumpleaños: {day}/{month + 1}/{year}</span>
                <span>{user.role === 'admin' ? "Administrador" : "Usuario"} hace
                    {moment(user.register).fromNow()}
                </span>

                <button className="m-auto w-25 btn-tokito">
                    <h5 className="text-center m-0 py-2 ">Editar perfil</h5>
                </button>
            </div>
            <Container className="m-auto">
                {/* <div className="mb-3 row align-items-center justify-content-center">
            <label className="col-11 col-md-3">Nombre </label>
            <label
                className="col-11 col-md-9 form-input"
            > Rodrigo</label>
        </div>
        <div className="mb-3 row align-items-center justify-content-center">
            <label className="col-11 col-md-3 align-items-center">Apellido</label>
            <label
                className="col-11 col-md-9 form-input"
            > Rodrigo</label>
        </div>
        <div className="mb-3 row align-items-center justify-content-center">
            <label className="col-11 col-md-3 align-items-center">Email</label>
            <label
                className="col-11 col-md-9 form-input"
            > Rodrigo</label>
        </div>
        <div className="mb-3 row align-items-center justify-content-center">
            <label className="col-11 col-md-3">Contraseña</label>
            <label
                className="col-11 col-md-9 form-input"
            > Rodrigo</label>
        </div>
        <div className="mb-3 row align-items-center justify-content-center">
            <label className="col-11 col-md-3">Nacimiento</label>
            <label
                className="col-11 col-md-9 form-input"
            > Rodrigo</label>
        </div>
*/}
                {/* <Table  bordered hover >
                <tbody className="text-center">
                    <tr>              
                        <td>Nombre</td>
                        <td  colSpan="2">Rodrigo</td>
                        <td  colSpan="2" className=""><input type="text" className="w-100 h-100 border-0"/></td>
                    </tr>
                    <tr>              
                        <td>Apellido</td>
                        <td  colSpan="2">Mendoza</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td colSpan="2">rodrigo@gmail.com</td>
                    </tr>
                    <tr>              
                        <td>Contraseña</td>
                        <td  colSpan="2">*******</td>
                    </tr>
                    <tr>              
                        <td>Nacimiento</td>
                        <td  colSpan="2">17/11/1995</td>
                    </tr>
                    <tr>              
                        <td>Role</td>
                        <td  colSpan="2">Administrador</td>
                    </tr>
                    <tr>              
                        <td>Registro</td>
                        <td  colSpan="2">Fecha de registro</td>
                    </tr>
                </tbody>
            </Table> */}
            </Container>
        </section>
    )
}
