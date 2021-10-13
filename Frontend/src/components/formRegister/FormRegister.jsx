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
            <Form.Group className="mb-4 d-flex flex-column align-items-center align-items-md-start justify-content-center" controlId="formBasicEmail">
                <label className="mb-2 text-center"> ¿Que estas buscando de nuestra bodega?</label>
                <select name="" id="">
                    <option>Por favor elija una opcion</option>
                    <option value="1">Vinos premiun</option>
                    <option value="2">Visitas al bodegon</option>
                    <option value="3">Nuevas Ofertas</option>
                </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Manténgame informado sobre mis pedidos, estado de entrega, noticias y ofertas exclusivas de miembros" />
            </Form.Group>
            <button  className="responsive-navbar-button">Iniciar sesión</button>
            </div>
        </Form>
    )
}
