import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListadoTrabajos } from './ListaTrabajos';

export const Inicio = () => {
  return (
    <div className='home'>
      <section className='home-welcome'>
            <h1 class="title-welcome" style={{"--duration": "1s"}}>
                <span style={{"--delay":" .5s"}}>Hola! Mi nombre es,</span>
                <span class="title-custom" style={{"--delay": ".6s"}}>Damián Bermúdez.</span>
                <span class="parrafo-welcome" style ={{"--duration": "1s"}}><strong style={{"--delay":" .7s"}}>Developer web full stack.</strong></span>
            </h1>
           
            <button id="abajo"><i class="fas fa-chevron-down"></i></button>
      </section>
    


      <section className='section-me'>
          <h2>Sobre mi</h2>
           <p>Hola!! Soy Damián Bermúdez, tengo 28 años y soy de Lobos - Provincia de Buenos Aires - Argentina. Soy <strong>desarrolladorr web full stack</strong>. Empece a estudiar programación de aplicaciones moviles en 2020, en un instituto de mi localidad, por cuestiones de tiempo (muchas materias y además trabajo en un fabrica metalurgica 9 horas) tuve que dejar. Empece de forma autodidacta estudiando desarrollado web y quede encantado. Fui adquiriendo los conocimientos basicos hasta que me tope con un anuncio en las redes sociales de la plataforma <a class="enlace-carrera" href="https://apx.school/" target="_blank">APX</a> donde actualmente estoy cursando la carrera de programacion web full stack.</p>
      </section>

      
     
      
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
