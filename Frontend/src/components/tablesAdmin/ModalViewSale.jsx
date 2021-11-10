import React from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'

export const ModalViewSale = ({ showModalViewSale, closeModal, saleFind, getSales }) => {
    return (
        <div>
            <Modal
                show={showModalViewSale}
                onHide={closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Datos de Venta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={1} md={3}>
                            <p>Nombre: {saleFind.buyerName}</p>
                            <p>Apellido: {saleFind.buyerLastName}</p>
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
            </Modal>
        </div>
    )
}
