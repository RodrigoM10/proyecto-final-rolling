import React, { useState } from 'react'
import swal from 'sweetalert'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export const FormRegister = () => {
    // Validaciones reactBoot
    const [validated, setValidated] = useState(false);

    const [input, setInput] = useState({ name: '', lastName: '', email: '', password: '', birthday: '' });

    const history = useHistory();

    const handleChange = (e) => {
        const { value, name } = e.target;
        const newInput = { ...input, [name]: value };
        if (newInput.name.length < 20
            && newInput.lastName.length < 20
            && newInput.email.length < 35
            && newInput.password.length < 15) {
            setInput(newInput);
        } else {
            swal('Alcanzaste el numero maximo de caracteres')
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://proyecto-final-db.herokuapp.com/api/auth/register', input);
            swal({
                title: "Excelente!",
                text: "Te has registrado con exito!",
                icon: "success",
                button: "Continua"
            });
            history.push('/login');
        } catch (error) {
            console.error(error);
            if (input.name === '' && input.lastName === '' && input.email === '' && input.password === '') {
                swal("Faltan datos", "Completar los campos obligatorios", "warning")
            }
            else if (input.name === '') {
                swal('completa el nombre')
            }
            else if (input.lastName === '') {
                swal('completa el apellido')
            }
            else if (input.email === '') {
                swal('completa el email')
            }
            else if (input.password === '') {
                swal('completa la contraseña')
            }
            else if (input.birthday === '') {
                swal('completa el nacimiento')
            }
            else {
                swal(JSON.stringify(error.response.data));
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
            className="form-register my-5" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicName">
                <label className="col-11 col-md-3 text-center">Nombre </label>
                <Form.Control
                    className="col-11 col-md-9 form-input form-with-input"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    maxLength="20"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicLastName">
                <label className="col-11 col-md-3 align-items-center text-center">Apellido</label>
                <Form.Control
                    className="col-11 col-md-9 form-input form-with-input"
                    name="lastName"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    maxLength="20"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicEmail">
                <label className="col-11 col-md-3 align-items-center text-center">Email</label>
                <Form.Control
                    className="col-11 col-md-9  form-input form-with-input"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    type="email"
                    maxLength="35"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicPasswprd">
                <label className="col-11 col-md-3 text-center">Contraseña</label>
                <Form.Control
                    className="col-11 col-md-9 form-input form-with-input"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    type="password"
                    minLength="6"
                    maxLength="15"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3 row align-items-center justify-content-center" controlId="formBasicDate">
                <label className="col-11 col-md-3 text-center">Nacimiento</label>
                <Form.Control
                    className="col-11 col-md-9 text-center form-input form-with-input"
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
