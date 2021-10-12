import React from 'react'
import { Accordion, Form } from "react-bootstrap";
import './filtersProducts.css';

export const FiltersProducts = () => {
    return (
        <Accordion defaultActiveKey="0"> 
        {/* FILTROS POR PRECIO */}
              <Accordion.Item className="acordionEstilo" eventKey="0">
                <Accordion.Header className="filtroMenu mt-5">PRECIO</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 1" />
                      <p className="mx-3">Menos de $300</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 2" />
                      <p className="mx-3"> $300 - $500</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 3" />
                      <p className="mx-3"> $501 - $800</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 4" />
                      <p className="mx-3"> Más de $800</p>
                    </>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              {/* FILTROS POR CATEGORIA */}
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
              {/* FILTROS POR GRADUACION DE ALCOHOL */}
              <Accordion.Item className="acordionEstilo" eventKey="2">
                <Accordion.Header className="filtroMenu mt-3">
                  ALCOHOL %
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 1" />
                      <p className="mx-3">0 %</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 2" />
                      <p className="mx-3">5%</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 3" />
                      <p className="mx-3">8%</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 3" />
                      <p className="mx-3">10%</p>
                    </>
                  </div>
                  <div className="d-flex">
                    <>
                      <Form.Check aria-label="option 3" />
                      <p className="mx-3">13%</p>
                    </>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
      </Accordion>
    )
}
