import React from 'react'
import { CardFavProduct } from '../components/cardProduct/CardFavProduct';



function Favorite({ favorites, setFavorites }) {
    console.log("🚀 ~ file: Favorite.jsx ~ line 7 ~ Favorite ~ favorites", favorites)
    const mapFavorites = favorites?.map((favProduct, i) => (<CardFavProduct key={i} favProduct={favProduct} setFavorites={setFavorites} />
    ));
    
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">{mapFavorites}</div>
        </>
    )};

export default Favorite