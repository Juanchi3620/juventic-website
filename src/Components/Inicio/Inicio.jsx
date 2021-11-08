import React from 'react'
import Testimonios from '../Nosotros/Testimonios'
import Carrusel from './Carrusel'
import Propuesta from './Propuesta'
import Recomendados from './Recomendados'
import Tuevento from './Tuevento'

function Inicio() {
    return (
        <>
           <Carrusel /> 
           <Propuesta />
           <Recomendados />
           <Tuevento />
           <Testimonios />
        </>
    )
}

export default Inicio
