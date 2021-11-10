import React, { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const CardProduct = ({ producto, favorites, setFavorites, cart, setCart, setShowSideCart }) => {

  const [isInCart, setIsInCart] = useState(false);

  const [isFavorites, setIsFavorites] = useState(false)

  const addFavorite = () => {
    setFavorites((favList) => favList.concat({ producto }))
  }
  const removeFavorite = () => {
    setFavorites((favList) => favList.filter((fav) => fav.producto._id !== producto._id));
    
  };
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
    } else {
      setIsFavorites(false)
    };
  }, [favorites, producto]);

  
  // FUNCION PARA aÑADIR A CARRITO CARRITO
  const cantidad = 1
  
  const addToCart = () => {
    setCart((cart) => cart.concat({ producto, cantidad }));
    setShowSideCart(true);
  };


  useEffect(() => {
    const inCart = cart.find((productoCart) => productoCart.producto._id === producto._id);
    if (inCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cart, producto]);



  return (
    <div className="productos mx-1 p-0" >
      <Card as={Link} to={`/store/${producto._id}`} className="card-productos">
        <div className="mt-3 d-flex align-items-start justify-content-center">
          <Card.Img
            className=" img-top-left"
            variant="top"
            src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_badges/v2/95-TS.svg"
          />
          <Card.Img className="img-top-center" variant="top" src={producto.image} />
          <Card.Img
            className="img-top-right"
            variant="top"
            src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_icons/v2/instock-icon.svg"
          />
        </div>
        <Card.Body className="card-description" >
          <Card.Title className="name-producto mt-1 text-center">
            {producto.name}
          </Card.Title>
          <Card.Text className="precio-producto mt-5 text-center">
            {producto.discount !== 0 ? <s>`RRP: $ {producto.price}`</s> : `Sin descuento`}
          </Card.Text>
          <Card.Text className="text-center precio-producto-descuento">
            $ {(producto.price - (producto.discount * producto.price) / 100).toFixed(2)}
          </Card.Text>
          <Card.Text className="text-center">Por unidad</Card.Text>
        </Card.Body>
      </Card>
      <div className="d-flex align-items-center justify-content-center bg-white">
        <button
          disabled={isInCart}
          className={isInCart ? 'col-9 responsive-cart-button-add' : 'col-9 btn-general-style'}
          onClick={addToCart} >
          {isInCart ? (
            'Añadido al Carrito'
          ) : (
            'Añadir al Carrito'
          )}
        </button>
        <button className="col-3 add-favorite-btn" onClick={toggleFavorite} >
          <FaHeart className={isFavorites ? "is-favorite" : "no-favorite"} />
        </button>
      </div >
    </div>
  )
}

