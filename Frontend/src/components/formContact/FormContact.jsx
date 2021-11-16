import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './formsStyles.css'
import swal from 'sweetalert'

export const FormContact = () => {

    
    const [input, setInput] = useState({ senderName: '', senderEmail: '', message: '' });
    
    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://proyecto-final-db.herokuapp.com/api/mensajes', input);
            swal({
                title: "Mensaje enviado con exito !",
                icon: "success",
            });
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
                    required
                    onChange={(e) => handleChange(e)}
                    maxLength="30"
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="col-11 col-md-3 align-items-center">Email</label>
                <input
                    className="col-11 col-md-9 form-input"
                    type="email"
                    name="senderEmail"
                    required
                    onChange={(e) => handleChange(e)}
                    maxLength="35"
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center ">
                <textarea
                    className="col-11 col-md-12 form-input"
                    placeholder="Dejanos un mensaje aqui..."
                    as="textarea"
                    name="message"
                    required
                    minLength="15"
                    maxLength="250"
                    rows={3}
                    onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <hr />
            <div className="d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <button className="btn-general-style">Contactanos</button>
            </div>
        </Form>
    )
}
