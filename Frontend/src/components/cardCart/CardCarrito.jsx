
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md';
import './cardCarrito.css'

export const CardCarrito = ({ productCart, cart, setCart, changeCantidad }) => {


  const removeToCart = () => {
    const filterCart = cart.filter((prodCart) => prodCart.producto._id !== productCart.producto._id);
    setCart(filterCart);
  };

  const oneMore = () => {
    changeCantidad(productCart.producto._id, productCart.cantidad + 1);
  };

  const oneLess = () => {
    changeCantidad(productCart.producto._id, productCart.cantidad - 1);
  };

  const isCartZero = productCart.cantidad <= 1 ;

  return (
    <>
      <div className="d-flex justify-content-end">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={
            (props) => (
              <Tooltip id="button-tooltip" {...props}>
                Eliminar
              </Tooltip>)
          }
        >
          <button className="btn-remove-to-cart pb-1 mb-2" onClick={removeToCart}>
            <MdOutlineClose />
          </button>
        </OverlayTrigger>
      </div>
      <div className="row justify-content-center align-content-center">
        <Card.Img className="m-2 col-12 col-lg-2"
          variant="top"
          style={{ width: '10rem' }}
          src={productCart.producto.image}
        />
        <Card.Text className="text-center col-12 col-lg-2" >
          {productCart.producto.name}
        </Card.Text>
        <Card.Text className="text-center  col-12 col-lg-2">
          <h6>${productCart.producto.price}</h6>
        </Card.Text>
        <div className="d-flex justify-content-center align-content-center m-2 col-12 col-lg-2">
             <button
              onClick={oneLess}
              disabled={isCartZero}
              className= {isCartZero ? 'delete-cartItem-btn': 'agregar-sacar-btn'}>-</button> 
          <h4 className="m-2">{productCart.cantidad}</h4>
          <button onClick={oneMore} className="agregar-sacar-btn">+</button>
        </div>
        <Card.Text className="text-center col-12 col-lg-2">
          <h6>Sub total: ${(productCart.producto.price * productCart.cantidad).toFixed(2)}</h6>
        </Card.Text>
        <hr />
      </div>
    </>
  )
}
