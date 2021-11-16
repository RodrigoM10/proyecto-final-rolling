import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './formsStyles.css'
import swal from 'sweetalert'

export const FormContact = () => {
    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);

    const [input, setInput] = useState({ senderName: '', senderEmail: '', message: '' });

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        if (newInput.senderName.length < 30 && newInput.senderEmail.length < 35 && newInput.message.length < 200) {
            setInput(newInput);
        } else {
            swal('Alcanzaste el numero maximo de caracteres')
        }
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
            if (error.response.data) {
                swal("Faltan datos", "Completar los campos obligatorios", "warning");
            } else {
                alert('error de conexion')
            }
        }
        setValidated(true);
        if (setValidated === true) {
            e.target.reset();
        }
    }
    return (
        <Form
            noValidate validated={validated}
            onSubmit={handleSubmit}
            className="form-styles my-5"
        >
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="text-center col-11 col-md-3">Nombre </label>
                <Form.Control
                    className="col-11 col-md-9 form-input form-with-input"
                    type="text"
                    name="senderName"
                    required
                    onChange={(e) => handleChange(e)}
                    maxLength="30"
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center">
                <label className="text-center col-11 col-md-3 align-items-center">Email</label>
                <Form.Control
                    className="col-11 col-md-9 form-input form-with-input"
                    type="email"
                    name="senderEmail"
                    required
                    onChange={(e) => handleChange(e)}
                    maxLength="35"
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center ">
                <Form.Control
                    className="col-11 col-md-12 form-input form-with-text-area"
                    placeholder="Dejanos un mensaje aqui..."
                    as="textarea"
                    name="message"
                    required
                    minLength="15"
                    maxLength="200"
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
