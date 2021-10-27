
import "./formLogin.css";
import { Card } from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert'
import { FaFacebookSquare } from 'react-icons/fa'
import { useState } from "react";
import { guardarEnLocalStorage } from "../../utils/localStorage";
import { useHistory } from 'react-router-dom';

export const FormLogin = ( {requestUserData} ) => {


    const [input, setInput] = useState({ email: '', password: '' });
    const history = useHistory();

    const handleChange = (event) => {
        const { value, name } = event.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();


        const form = event.currentTarget;

        if (form.checkValidity() === true) {
            try {
                const response = await axios.post('http://localhost:4000/api/auth/login', input);

                const { token, name } = response.data;
                guardarEnLocalStorage({ key: 'token', value: { token } });
                swal('Bienvenido al Mundo Rolling Winery ' + name);
                await requestUserData();
                //El push redirecciona a la pantalla indicada en el parametro.
                history.push('/');
                // window.location.reload();

            } catch (error) {
                console.error(error);
                if (error.response.data) {
                    alert(JSON.stringify(error.response.data));
                } else {
                    alert('Error de conexion');
                }
            }
        }
    };


    return (

        <Card className="d-flex justify-content-center form-login">
            <Card.Body>
                <div className="d-flex flex-column align-items-center">
                    <h3 className="header">Bienvenido a Rolling Wine</h3>
                    <p className="subHeader">Solo para miembros</p>
                </div>
                <form className="login-form" onSubmit={handleSubmit} >
                    <div className="mb-3 border-0">
                        <input
                            required
                            name="email"
                            onChange={(e) => handleChange(e)}
                            type="email"
                            className="col-11 login-input"
                            placeholder="Email"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="mb-3 border-0">
                        <input
                            required
                            name="password"
                            onChange={(e) => handleChange(e)}
                            type="password"
                            className="col-11 login-input"
                            placeholder="Password"
                            minLength="6"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <button type="submit" className="responsive-navbar-button"> Iniciar sesión</button>
                </form>
                <div className="d-flex flex-column">
                    <button type="submit" className="responsive-login-face"> <FaFacebookSquare className="mb-1" /> Iniciar sesión con facebook</button>
                    <div className="d-flex flex-column align-items-center justify-content-center crea-cuenta mt-2">
                        <p className="mb-1">¿Aun no eres miembro?</p>
                        <a href="/register">Crea una cuenta</a>
                    </div>
                </div>
            </Card.Body>
        </Card>

    )
}
