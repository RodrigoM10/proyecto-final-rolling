import React from 'react'
import { Card } from 'react-bootstrap';
import "./cardsLogin.css";

export const CardsLogin = () => {
    return (
        <div className="tarjetas-login">
            <Card className="text-center mb-2">
                <Card.Body>
                    <h4>¿Todavia no tienes la Card Vip Member? </h4>
                    <button type="submit" className="responsive-navbar-button">Quiero ser Miembro Vip</button>
                </Card.Body>
            </Card>
            <Card className="text-white text-center">
                <Card.Img src="https://i.pinimg.com/originals/43/b6/e1/43b6e1b590d31b67a944a41ae669d0ab.png" alt="Card image" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-between">
                    <Card.Text className="evento-texto">
                        Visita nuestras Bodegas, se parte de nuestros eventos y disfruta de los mejores vinos seleccionados.
                    </Card.Text>
                    <button type="submit" className="responsive-navbar-button">Quiero Participar</button>
                </Card.ImgOverlay>
            </Card>
        </div>

    )
}

