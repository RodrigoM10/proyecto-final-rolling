import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './formsStyles.css'

export const FormContact = () => {
    const [input, setInput] = useState({ senderName: '', senderEmail: '', message: ''});

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/mensajes', input);
            alert('Mensaje enviado ');
        } catch (error) {
            console.error(error);
        }
        e.target.reset();
    }
    return (
        <Form
         className="form-styles my-5  "
          onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="col-11 col-md-3">Nombre </label>
                <input 
                className="col-11 col-md-9 form-input" 
                type="text" 
                name="senderName" 
                onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="col-11 col-md-3 align-items-center">Email</label>
                <input 
                className="col-11 col-md-9 form-input" 
                type="email" 
                name="senderEmail" 
                onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center ">
                <textarea 
                className="col-11 col-md-12 form-input" 
                placeholder="Dejanos un mensaje aqui..." 
                as="textarea"
                name="message" 
                rows={3} 
                onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <hr />
            {/* <Form.Group className="mb-4 d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <label className="mb-2 text-center"> ¿Que estas buscando de nuestra bodega?</label>
                <select 
                type="text"
                name="select"
                onChange={(e) => handleChange(e)}
                >
                    <option>Por favor elija una opcion</option>
                    <option type="text" value="1">Vinos premiun</option>
                    <option type="text" value="2">Visitas al bodegon</option>
                    <option type="text" value="3">Nuevas Ofertas</option>
                </select>
            </Form.Group> */}
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                label="Manténgame informado sobre mis pedidos, estado de entrega, noticias y ofertas exclusivas de miembros"
                name="checkbox"
                onChange={(e) => handleChange(e)}
                />
            </Form.Group> */}
            <div className="d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <button className="responsive-navbar-button">Contactanos</button>
            </div>
        </Form>
    )
}
