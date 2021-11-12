import React, { useState } from 'react'
import swal from 'sweetalert'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './formRegister.css'

export const FormRegister = () => {
    const [input, setInput] = useState({ name: '', lastName: '', email: '', password: '', birthday: '' });

    const history = useHistory();

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/auth/register', input);
            swal({
                title: "Excelente!",
                text: "Te has registrado con exito!",
                icon: "success",
                button: "Continua"
              });
            history.push('/login');
        } catch (error) {
            console.error(error);
            if (error.response.data) {
                swal(JSON.stringify(error.response.data));
            } else {
                alert('error de conexion')
            }
        }
        if(input=== " "){
            alert('inputs vacios')
        }
    }
    
    return (
        <Form className="form-register my-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3">Nombre </label>
                <input
                    className="col-11 col-md-9 form-input"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    maxLength="20"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3 align-items-center">Apellido</label>
                <input
                    className="col-11 col-md-9 form-input"
                    name="lastName"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    maxLength="20"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3 align-items-center">Email</label>
                <input
                    className="col-11 col-md-9 form-input"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    type="email"
                    maxLength="25"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3">Contraseña</label>
                <input
                    className="col-11 col-md-9 form-input"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    type="password"
                    minLength="6"
                    maxLength="15"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3">Nacimiento</label>
                <input
                  className="col-11 col-md-9 text-center" 
                  type="date"
                  name="birthday"
                  onChange={(e) => handleChange(e)}
                  required 
                  />
            </Form.Group>
            <hr />
            <div className="d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <button type="submit" className="btn-general-style">Registrarme</button>
                <Link className="mt-2 text-decoration-none text-white" to="/login">
                    ¿Ya tiene una cuenta? Iniciar sesión
                </Link>
            </div>
        </Form>
    )
}
