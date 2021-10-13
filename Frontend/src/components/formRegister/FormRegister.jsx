import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './formRegister.css'

export const FormRegister = () => {
    return (
        <Form className="form-register my-5  ">
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3">Nombre </label>
                <input className="col-11 col-md-9" type="text" />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3 align-items-center">Apellido</label>
                <input className="col-11 col-md-9" type="text" />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3 align-items-center">Email</label>
                <input className="col-11 col-md-9" type="email" />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3">Contraseña</label>
                <input className="col-11 col-md-9" type="password" />
            </Form.Group>
            {/* <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3">Nacimiento</label>
                <input className="col-11 col-md-9 text-center" type="date" />
            </Form.Group> */}
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3" >Nacimiento</label>
                <div className="col-11 col-md-9 row-cols-3 p-0">
                    <input type="number" placeHolder="DD" id="birth-day" min="1" max="31" maxLength="2" required />
                    <input type="number" placeHolder="MM" id="birth-day" min="1" max="12" maxLength="2" required />
                    <input type="number" placeHolder="AAAA" id="birth-day" min="1" max="31" minLength="4" required />
                </div>
            </Form.Group>
            <hr />
            <div className="d-flex flex-column align-items-center align-items-md-start justify-content-center">
            <button  className="responsive-navbar-button">Iniciar sesión</button>
            </div>
        </Form>
    )
}
