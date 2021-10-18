import React from 'react'
import { Container } from 'react-bootstrap'
import { AboutHeader } from '../components/aboutUs/AboutHeader'
import { Historia } from '../components/aboutUs/Historia'
import { HistoriaCards } from '../components/aboutUs/HistoriaCards'


function About() {
    return (
        <div>
            <AboutHeader/>
            <Container>
            <Historia/>
            <HistoriaCards/>
            </Container>
        </div>
    )
}

export default About