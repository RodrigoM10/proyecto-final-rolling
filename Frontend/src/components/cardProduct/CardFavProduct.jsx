import React, { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


export const CardFavProduct = ({ favProduct, setFavorites }) => {

  // filtra en el array favList, y deja el array favList, sin el elemento fav que coincida ( fav === producto._id). Setea el array de favorites con el array favList filtrado.
  const removeFavorite = () => {
    setFavorites((favList) => favList.filter((fav) => fav.favProduct.producto._id !== favProduct.producto._id));
  };

  return (
    <div>
      <div className="productos mx-3" >
        <Card as={Link} to={`/store/${favProduct.producto._id}`} className="card-productos">
          <div className="mt-3 d-flex align-items-start">
            <Card.Img
              className="m-2 img-top-left"
              variant="top"
              src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_badges/v2/95-TS.svg"
            />
            <Card.Img className="img-top-center" variant="top" src={favProduct.producto.image} />
            <Card.Img
              className="img-top-right"
              variant="top"
              src="https://twc.s3.ap-southeast-2.amazonaws.com/web/twc_icons/v2/instock-icon.svg"
            />
          </div>
          <Card.Body className="card-description" >
            <Card.Title className="name-producto mt-1 text-center">
              {favProduct.producto.name}
            </Card.Title>
            <Card.Text className="precio-producto mt-5 text-center">
              {favProduct.producto.discount !== 0 ? <s>`RRP: $ ${favProduct.producto.price}`</s> : `Sin descuento`}
            </Card.Text>
            <Card.Text className="text-center precio-producto-descuento">
              {(favProduct.producto.price - (favProduct.producto.discount * favProduct.producto.price) / 100).toFixed(2)}
            </Card.Text>
            <Card.Text className="text-center">Por unidad</Card.Text>
          </Card.Body>
        </Card>
        <div className="d-flex align-items-center justify-content-center">
          <button className="col-9 responsive-navbar-button ">Añadir al carrito</button>
        </div>
      </div>
    </div>
  )
}

