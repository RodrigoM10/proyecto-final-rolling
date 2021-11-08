
import { Card, Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { CardFavProduct } from '../components/cardProduct/CardFavProduct';


function Favorite({ favorites, setFavorites, cart, setCart }) {

     //fn limpia productos del favoritos
     const clearFavorites = () => {
        setFavorites([]);
    };

    const mapFavorites = favorites?.map((favProduct, i) => (
    <CardFavProduct 
        key={i} favProduct={favProduct} 
        setFavorites={setFavorites} favorites={favorites} 
        cart={cart} setCart={setCart}/>
    ));

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                    <h2 className="title-style my-2">Lista de deseos</h2>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={
                            (props) => (
                                <Tooltip id="button-tooltip" {...props}>
                                    Quitar Favoritos
                                </Tooltip>)
                        }
                    >
                        <button className="clean-cart my-2" onClick={clearFavorites}><MdOutlineCleaningServices /></button>
                    </OverlayTrigger>
                </div>
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