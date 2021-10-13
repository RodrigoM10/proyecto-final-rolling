import React from 'react'
import { Form } from 'react-bootstrap'
import './formsStyles.css'

export const FormContact = () => {
    return (
        <Form className="form-styles my-5  ">
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="col-11 col-md-3">Nombre </label>
                <input className="col-11 col-md-9 form-input" type="text" />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="col-11 col-md-3 align-items-center">Email</label>
                <input className="col-11 col-md-9 form-input" type="email" />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <textarea className="col-12 form-input"  placeholder="Dejanos un mensaje aqui..." as="textarea" rows={3} />
            </Form.Group>
            <hr />
            <Form.Group className="mb-4 d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <label className="mb-2 text-center"> ¿Que estas buscando de nuestra bodega?</label>
                <select type="text" id="">
                    <option>Por favor elija una opcion</option>
                    <option type="text" value="1">Vinos premiun</option>
                    <option type="text" value="2">Visitas al bodegon</option>
                    <option type="text" value="3">Nuevas Ofertas</option>
                </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Manténgame informado sobre mis pedidos, estado de entrega, noticias y ofertas exclusivas de miembros" />
            </Form.Group>
            <div className="d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <button className="responsive-navbar-button">Contactanos</button>
            </div>
        </Form>
    )
}
