import React, { useState } from 'react'
import { Accordion, CloseButton, Form } from 'react-bootstrap';
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
      <div className="d-flex flex-column justify-content-start align-content-center">

        <div className=" d-flex  align-content-center">
          <div className="d-flex flex-column">
            <label className="m-2" for="cars">Categoria</label>
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

        <div className=" d-flex  align-content-center">
          <div className="d-flex flex-column">
            {/* <label for="customRange3" class="form-label">Precio</label>
            <input type="range" className="form-range" min="10" max="60" step="0.5" id="customRange3" /> */}
             <label className="m-2" for="cars">Precio</label>
            <select onChange={filtrarPrecio} className="form-select" >
              <option value="20">Hasta 20</option>
              <option value="30">Hasta 30</option>
              <option value="40">Hasta 40</option>
              <option value="60">Hasta 60</option>
            </select>
          </div>
          <div>
            <CloseButton className={`m-2 ${visibleClearPri}`} onClick={clearSelect} />
          </div>
        </div>

      </div>

      {/* <Accordion defaultActiveKey="0">  
       <Accordion.Item className="acordionEstilo" eventKey="0">
                <Accordion.Header className="filtroMenu mt-5">PRECIO</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 1" />
                      <p className="mx-3">Menos de $20</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 2" />
                      <p className="mx-3"> $20 - $30</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 3" />
                      <p className="mx-3"> $31 - $40</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 4" />
                      <p className="mx-3"> Más de $40</p>
                    </>
                  </div>
                </Accordion.Body>
              </Accordion.Item> 

      <Accordion.Item className="acordionEstilo" eventKey="1">
                <Accordion.Header className="filtroMenu mt-3">
                  CATEGORÍA
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 1" />
                      <p className="mx-3">Rojo</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 2" />
                      <p className="mx-3">Blanco</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 3" />
                      <p className="mx-3">Espumoso</p>
                    </>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
      </Accordion>  */}
    </>
  )
}
