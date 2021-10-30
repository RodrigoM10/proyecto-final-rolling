import React from 'react'
import { CardProduct } from '../components/cardProduct/CardProduct';


function Favorite({ favorites }) {
    const mapFavorites = favorites?.map((producto, i) => (<CardProduct key={i} producto={producto} favorites={favorites} />
    ));
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">{mapFavorites}</div>
        </>
    )};

export default Favorite