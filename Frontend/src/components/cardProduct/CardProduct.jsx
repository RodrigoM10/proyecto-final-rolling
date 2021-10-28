import React from 'react'
import { Card } from "react-bootstrap";
import { FaRegHeart } from 'react-icons/fa';
import { useHistory } from 'react-router';



export const CardProduct = ({producto}) => {

  const history = useHistory();
  const handlerRedirect = () =>{
    history.push(`/products/${producto._id}`);
  }
  return (
    <div>
      <div className="productos mx-3" onClick={handlerRedirect}>
        <Card className="card-productos">
          <div className="mt-3 d-flex align-items-start">
            <Card.Img
              className="m-2 img-top-left"
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
             {producto.discount !==0 ? <s>`RRP: $ ${producto.price}`</s> : `Sin descuento`}
            </Card.Text>
            <Card.Text className="text-center precio-producto-descuento">
              {(producto.price - (producto.discount * producto.price) / 100).toFixed(2)}
            </Card.Text>
            <Card.Text className="text-center">Por unidad</Card.Text>
            <div className="d-flex align-items-center ">
              <button className="col-9 responsive-navbar-button ">Añadir al carrito</button>
              <button className="col-3 add-favourite-btn"><FaRegHeart /></button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

