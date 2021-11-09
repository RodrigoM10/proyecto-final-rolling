import React from 'react'
import { Accordion, Form } from 'react-bootstrap';
// import { Accordion, Form } from "react-bootstrap";
import './filtersProducts.css';

export const FiltersProducts = ({ busqueda, allProducts }) => {

  console.log(allProducts)

  // const filtrarCategoria = (e) => {
  //   const categorySelected = e.target.value
  //   const filterCategory = allProducts.filter(producto => producto.category === categorySelected).map(filteredCategory => ({ filteredCategory }))
  //   console.log(filterCategory);
  // }

  return (
    <>
      {/* <div>
        <select class="form-select" aria-label="Default select example">
          <option value="">Open this select menu</option>
          <option value="20">Menos de $20</option>
          <option value="rango1">$20 y $30</option>
          <option value="rango2">$31 y $40</option>
          <option value="40">Mas de  $40</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => filtrarCategoria(e)} className="form-select" aria-label="Default select example">
          <option value="">Open this select menu</option>
          <option value="Rojo">Tintillo</option>
          <option value="Blanco">Blancusco</option>
          <option value="Espumoso">Espumoni</option>
        </select>
      </div> */}
       <Accordion defaultActiveKey="0">  
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
      </Accordion> 
    </>
  )
}
