import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Card } from "react-bootstrap";
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const CardProduct = ({ producto, favorites, setFavorites, cart, setCart, setShowSideCart }) => {

  const [isInCart, setIsInCart] = useState(false);

  const [isFavorites, setIsFavorites] = useState(false)
  //  Crea el array favorites agregando el 1er  elemento o agrega otro elemento al array. (el array favorites queda seteado en el array favList.)
  const addFavorite = () => {
    setFavorites((favList) => favList.concat({ producto }))
  }

  // filtra en el array favList, y deja el array favList, sin el elemento fav que coincida ( fav === producto._id). Setea el array de favorites con el array favList filtrado.
  const removeFavorite = () => {
    setFavorites((favList) => favList.filter((fav) => fav.producto._id !== producto._id));
    setIsFavorites(false)
  };

  //  esta funcion 1° se fija si existe en el array favoritos un elemento fav que coincida con ese producto._id.
  // si isFavored ( osea si esta favoriteado), llama a la funcion removeFavorite, con el parametro producto._id.
  // si no, llama a la funcion addFavorite, con el parametro producto._id.
  const toggleFavorite = () => {
    const isFavored = favorites.some((fav) => fav.producto._id === producto._id);
    if (isFavored) {
      removeFavorite()
    } else {
      addFavorite()
    }
  }

  useEffect(() => {
    const isFavorites = favorites.some((fav) => fav.producto._id === producto._id);
    if (isFavorites) {
      setIsFavorites(true);
    };
  }, [favorites]);


  // FUNCION PARA aÑADIR A CARRITO CARRITO
  const addToCart = () => {
    setCart((cart) => cart.concat({ producto }));
    setShowSideCart(true);
  };

  const cartEffect = () => {
    const inCart = cart.find((productoCart) => productoCart.producto.id === producto.id);
    if (inCart) {
      setIsInCart(true);
    }
  }
  useEffect(() => {
    cartEffect();
  }, [cart]);



  return (
    <div>
      <div className="productos mx-3" >
        <Card as={Link} to={`/store/${producto._id}`} className="card-productos">
          <div className="mt-3 d-flex align-items-start">
            <Card.Img
              className="m-2 img-top-left"
              variant="top"
              src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_badges/v2/95-TS.svg"
            />
            <Card.Img className="img-top-center" variant="top" src={producto.image} />
            <Card.Img
              className="m-2 img-top-right"
              variant="top"
              src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_icons/v2/instock-icon.svg"
            />
          </div>
          <Card.Body className="card-description" >
            <Card.Title className="name-producto mt-1 text-center">
              {producto.name}
            </Card.Title>
            <Card.Text className="precio-producto mt-5 text-center">
              {producto.discount !== 0 ? <s>`RRP: $ ${producto.price}`</s> : `Sin descuento`}
            </Card.Text>
            <Card.Text className="text-center precio-producto-descuento">
              {(producto.price - (producto.discount * producto.price) / 100).toFixed(2)}
            </Card.Text>
            <Card.Text className="text-center">Por unidad</Card.Text>
          </Card.Body>
        </Card>
        <div className="d-flex align-items-center justify-content-center">
          <button className="col-9 responsive-navbar-button " onClick={addToCart} >Añadir al carrito</button>
          <button className="col-3 add-favorite-btn" onClick={toggleFavorite} >
            <FaHeart className={isFavorites ? "is-favorite" : "no-favorite"} />
          </button>
        </div >
      </div>
    </div >
  )
}

