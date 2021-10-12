
import "./formLogin.css";
import { Card } from 'react-bootstrap'
import { FaFacebookSquare } from 'react-icons/fa'


export const FormLogin = () => {

    return (

        <Card className="d-flex justify-content-center form-login">
            <Card.Body>
                <div className="d-flex flex-column align-items-center">
                    <h3 className="header">Welcome to Rolling Wine</h3>
                    <p className="subHeader">Only for Members</p>
                </div>
                <form className="login-form" >
                    <div controlId="validationCustom01"className="mb-3 border-0">
                        <input
                            required
                            name="email"
                            type="email"
                            className="col-11 login-input"
                            placeholder="Email"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div controlId="validationCustom02" className="mb-3 border-0">
                        <input
                            required
                            name="password"
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
                        <a href=".">Crea una cuenta</a>
                    </div>
                </div>
            </Card.Body>
        </Card>

    )
}
