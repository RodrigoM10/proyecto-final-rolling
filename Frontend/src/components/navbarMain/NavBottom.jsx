import React from 'react'
import { Container } from 'react-bootstrap'
import { VscSearch } from 'react-icons/vsc'

export const NavBottom = ({filter}) => {
    return (
        <nav className="bg-blue">  
        <Container className="py-2 d-flex justify-content-center ">
            <form className="search-form" >
                <div className="input-group mb-3 border-0">
                    <span
                        className="search-icon"
                        id="basic-addon1"><VscSearch /></span>
                    <input
                        type="text"
                        className="col-11 search-input"
                        placeholder="Buscá tu vino "
                        aria-describedby="basic-addon1"
                        onChange={filter}
                    />
                </div>
            </form>
        </Container>
        </nav>
    )
}
