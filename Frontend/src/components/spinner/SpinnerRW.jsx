import React from 'react'
import { Spinner } from 'react-bootstrap'

export const SpinnerRW = () => {
    return (
        <div
            className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center spinner-style">
            <Spinner animation="border" role="status" />
        </div>
    )
}
