
import React from 'react'
import { FaArrowAltCircleDown } from 'react-icons/fa';
import "./about.css";


export const AboutHeader = () => {

    const scrollDown = () => {
        window.scrollTo(0, 1000);
    }

    return (
        <div className="about-style">
            <div className="h-75 d-flex flex-column justify-content-between align-items-center">
                <div className="my-5 text-center about-text-header">
                    <h1 className="efecto-text1">ROLLING WINE</h1>
                    <h3 className="efecto-text2">Conoce nuestra Historia</h3>
                </div>
                <div>
                    <button  className="boton-down-header" onClick={scrollDown}><FaArrowAltCircleDown /></button>
                </div>
            </div>
        </div>
    )
}