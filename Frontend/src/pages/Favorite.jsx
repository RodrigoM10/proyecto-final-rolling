import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { CardFavProduct } from '../components/cardProduct/CardFavProduct';




function Favorite({ favorites, setFavorites }) {


    const mapFavorites = favorites?.map((favProduct, i) => (<CardFavProduct key={i} favProduct={favProduct} setFavorites={setFavorites} favorites={favorites} />
    ));

    return (
        <Container>
            <h2 className="title-style my-2">Lista de deseos</h2>
            {favorites.length === 0 ?
                <Card className="no-results-card text-center text-dark-50 p-5 m-5">
                    <Card.Title>Aún no tienes ningún favorito</Card.Title>
                </Card>
                :
                <div>
                    <div className="d-flex flex-wrap justify-content-center">
                        {mapFavorites}
                    </div>
                </div>
            }
        </Container>
    )
};

export default Favorite