
import { CloseButton} from 'react-bootstrap';
import './filtersProducts.css';

export const FiltersProducts = ({ setSelectCategory, selectCategory, onselectCat, onselectPri, setSelectPrice, selectPrice }) => {

  const filtrarCategoria = (e) => {
    const category = e.target.value;
    setSelectCategory(category)
  }

  const filtrarPrecio = (e) => {
    const price = e.target.value;
    setSelectPrice(price)
  }

  const clearSelect = () => {
    onselectCat('');
    onselectPri('')
  }

  const visibleClearCat = selectCategory ? '' : 'd-none';

  const visibleClearPri = selectPrice ? '' : 'd-none';


  return (
    <>
      <div className="d-flex flex-column justify-content-start ">
        <h4>Filtra tus Vinos </h4>

        <div className=" d-flex  align-content-center mt-2">
          <div className="d-flex flex-column">
            <label className="m-2" >Categoria</label>
            <select onChange={filtrarCategoria} className="form-select" >
              <option value="Rojo">Rojo</option>
              <option value="Blanco">Blanco</option>
              <option value="Espumoso">Espumoso</option>
            </select>
          </div>
          <div>
            <CloseButton className={`m-2 ${visibleClearCat}`} onClick={clearSelect} />
          </div>
        </div>

        <div className=" d-flex  align-content-center mt-2">
          <div className="d-flex flex-column">
            <label className="m-2">Precio</label>
            <select onChange={filtrarPrecio} className="form-select" >
              <option value="20">Hasta $20</option>
              <option value="30">Hasta $30</option>
              <option value="40">Hasta $40</option>
              <option value="60">Hasta $60</option>
            </select>
          </div>
          <div>
            <CloseButton className={`m-2 ${visibleClearPri}`} onClick={clearSelect} />
          </div>
        </div>
      </div>
    </>
  )
}
