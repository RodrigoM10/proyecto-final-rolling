import React, { useState } from 'react'
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
        console.log("🚀 ~ file: FormRegister.jsx ~ line 17 ~ handleChange ~ value", value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/auth/register', input);
            alert('Registro exitoso');
            history.push('/login');
        } catch (error) {
            console.error(error);
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
            {/* <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3" >Nacimiento</label>
                <div className="col-11 col-md-9 row-cols-3 p-0">
                    <input className="form-input" type="number" placeHolder="DD" id="birth-day" min="1" max="31" maxLength="2" required />
                    <input className="form-input" type="number" placeHolder="MM" id="birth-day" min="1" max="12" maxLength="2" required />
                    <input className="form-input" type="number" placeHolder="AAAA" id="birth-day" min="1920" max="2021" minLength="4" required />
                </div>
            </Form.Group> */}
            <hr />
            <div className="d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <button type="submit" className="responsive-navbar-button">Registrarme</button>
                <Link className="mt-2 text-decoration-none text-white" to="/login">
                    ¿Ya tiene una cuenta? Iniciar sesión
                </Link>
            </div>
        </Form>
    )
}
