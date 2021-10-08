import React from 'react'
import "./cardLogin.css";
import { Card } from 'react-bootstrap'

const CardLogin = () => {
    return (
        <div>
            <Card className="bg-dark text-white mb-2 cartiols">
                    <Card.Img className="cartiols" src="https://wallpaperaccess.com/full/1947484.jpg" alt="Card image" />
                    <Card.ImgOverlay className="text-cartiols">
                        <Card.Title>fff</Card.Title>
                        <Card.Text>
                            Eventos 
                        </Card.Text>
                    </Card.ImgOverlay>
                    <button type="submit" className="responsive-navbar-button"> Iniciar sesión</button>
                </Card>
        </div>
    )
}

export default CardLogin
