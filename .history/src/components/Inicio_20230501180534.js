import React from 'react'
import { NavLink } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
      <h1>
        Hola, soy Damian Bermudez y soy desarrollador web full stack en Lobos - Provincia de Buenos Aires- Argentina.
        Ofrezco mis servicios de programacion y desarrollo en todo tipo de proyectos web.
      </h1>
      <h2>
        Te ayudo a crear tu sitio o aplicacion web para tener mas visibilidad y relevancia en internet. <NavLink to="/contacto">Contactate</NavLink>
      </h2>
      <section className='lasts-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollador web</p>
        <div className='words'>

        </div>
      </section>
    </div>
    
  )
}
