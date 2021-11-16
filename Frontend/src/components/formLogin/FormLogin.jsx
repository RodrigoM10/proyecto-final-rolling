
import "./formLogin.css";
import { Card } from 'react-bootstrap'
import axios from 'axios'
import swal from 'sweetalert'
import { FaFacebookSquare } from 'react-icons/fa'
import { useState } from "react";
import { guardarEnLocalStorage } from "../../utils/localStorage";
import { useHistory } from 'react-router-dom';

export const FormLogin = ({ requestUserData, cart }) => {

    const [input, setInput] = useState({ email: '', password: '' });
    const history = useHistory();

    const scrollToTop = () => {
        window.scrollTo(0, 400);
    };

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
                const response = await axios.post('https://proyecto-final-db.herokuapp.com/api/auth/login', input);

                const { token, name } = response.data;
                guardarEnLocalStorage({ key: 'token', value: { token } });
                if (cart.length !== 0) {
                    swal('Genial ' + name + ' estas listo para comprar tus vinos en Rolling Winery ');
                } else {
                    swal('Bienvenido al Mundo Rolling Winery ' + name);
                }
                await requestUserData();
                //El push redirecciona a la pantalla indicada en el parametro.
                if (cart.length !== 0) {
                    history.push('/cart');
                    scrollToTop();
                } else {
                    history.push('/');
                }

            } catch (error) {
                console.error(error);
                if (error.response.data) {
                    swal({
                        title: "Datos Incorrectos / Usuario No Registrado",
                        text: "Aun no tienes cuenta? Registrate ya mismo!",
                        icon: "error",
                        buttons: ["No, Gracias", "Registrate!"],
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                history.push('/register')
                            } else {
                                swal("Sera en otra Ocacion!");
                            }
                        });
                } else {
                    alert('Error de conexion');
                }
            }
        }
    };


    const errorLink = () => {
        swal("Oops!", "Todavia no trabajamos en esto :(", "error");
    }

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
                            maxLength="35"
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
                            maxLength="15"
                        />
                    </div>
                    <button type="submit" className="btn-general-style"> Iniciar sesión</button>
                </form>
                <div className="d-flex flex-column">
                    <button onClick={errorLink} type="submit" className="responsive-login-face"> <FaFacebookSquare className="mb-1" /> Iniciar sesión con facebook</button>
                    <div className="d-flex flex-column align-items-center justify-content-center crea-cuenta mt-2">
                        <p className="mb-1">¿Aun no eres miembro?</p>
                        <a href="/register">Crea una cuenta</a>
                    </div>
                </div>
            </Card.Body>
        </Card>

    )
}
