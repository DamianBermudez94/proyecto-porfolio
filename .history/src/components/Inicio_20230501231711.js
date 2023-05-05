import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListaTrabajos } from './ListaTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Damián Bermúdez</strong> y soy desarrollador web full stack en Lobos - Provincia de Buenos Aires- Argentina.
        Ofrezco mis servicios de <strong>programación</strong> y <strong>desarrollo</strong> en todo tipo de proyectos web.
      </h1>
      <h2>
        Te ayudo a crear tu sitio o aplicacion web para tener mas visibilidad y relevancia en internet. <NavLink to="/contacto">Contactate</NavLink>
      </h2>
      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollador web</p>
        <ListaTrabajos limite="2"/>
      </section>
    </div>
    
  )
}
