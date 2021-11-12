import React from 'react'
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md'


export const CardFavProduct = ({ favProduct, setFavorites, favorites }) => {

  const removeFavorite = () => {
    const filterFavorite = favorites.filter((fav) => fav.producto._id !== favProduct.producto._id);
    setFavorites(filterFavorite);
  };

  return (
    <div>
      <div className="productos mx-3" >
        <div className="d-flex justify-content-end">
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={
              (props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Eliminar
                </Tooltip>)
            }
          >
            <button className="remove-btn pb-1" onClick={removeFavorite}>
              <MdOutlineClose />
            </button>
          </OverlayTrigger>
        </div>
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
              $ {(favProduct.producto.price - (favProduct.producto.discount * favProduct.producto.price) / 100).toFixed(2)}
            </Card.Text>
            <Card.Text className="text-center">Por unidad</Card.Text>
          </Card.Body>
        </Card>
        <div className="d-flex align-items-center justify-content-center">
          {/* <button
            disabled={isInCart}
            className={isInCart ? 'col-9 responsive-cart-button-add' : 'col-9 btn-general-style'}
            onClick={addToCart} >
            {isInCart ? (
              'Añadido al Carrito'
            ) : (
              'Añadir al Carrito'
            )}
          </button> */}
        </div>
      </div>
    </div>
  )
}

