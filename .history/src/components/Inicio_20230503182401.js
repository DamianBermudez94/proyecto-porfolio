import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListadoTrabajos } from './ListaTrabajos';

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola! soy <strong>Damián Bermúdez</strong> y soy <strong>Developer web full Stack</strong>
      </h1>
      <button id="abajo"><i class="fas fa-chevron-down"></i></button>
      <p>Hola!! Soy Damián Bermúdez, tengo 28 años y soy de Lobos - Provincia de Buenos Aires - Argentina. Soy <strong>desarrolladorr web full stack</strong>. Empece a estudiar programación de aplicaciones moviles en 2020, en un instituto de mi localidad, por cuestiones de tiempo (muchas materias y además trabajo en un fabrica metalurgica 9 horas) tuve que dejar. Empece de forma autodidacta estudiando desarrollado web y quede encantado. Fui adquiriendo los conocimientos basicos hasta que me tope con un anuncio en las redes sociales de la plataforma <a class="enlace-carrera" href="https://apx.school/" target="_blank">APX</a> donde actualmente estoy cursando la carrera de programacion web full stack.</p>
     
      
      <h2 className='subtitle-home'>
        Te ayudo a crear tu sitio o aplicacion web para tener mas visibilidad y relevancia en internet. <NavLink to="/contacto">Contactate</NavLink>
      </h2>
      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollador web</p>
        <ListadoTrabajos limite="2"/>
      </section>
    </div>
    
  )
}
