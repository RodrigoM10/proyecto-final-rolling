import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { CardFavProduct } from '../components/cardProduct/CardFavProduct';
import { CardProduct } from '../components/cardProduct/CardProduct';



function Favorite({ favsProducts, setFavsProducts, favorites, setFavorites }) {


    const mapFavorites = favsProducts?.map((producto, i) => (<CardProduct key={i} producto={producto} setFavorites={setFavorites} favorites={favorites} />
    ));

    return (
        <Container>
            {favorites.length === 0 ?
                <Card className="no-results-card text-center text-dark-50 p-5 m-5">
                    <Card.Title>Aún no tienes ningún favorito</Card.Title>
                </Card>
                :
                <div>
                    <h2 className="title-style my-2">Lista de deseos</h2>
                    <div className="d-flex flex-wrap justify-content-center">

                        {mapFavorites}
                    </div>
                </div>
            }
        </Container>
    )
};

export default Favorite