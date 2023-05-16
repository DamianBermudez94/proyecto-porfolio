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
                <span class="parrafo-welcome" style ={{"--duration": "1s"}}><span style={{"--delay":" .7s"}}>Developer web full stack.</span></span>
            </h1>
           
            <button id="abajo"><i className="fas fa-chevron-down"></i></button>
      </section>
      <section className='section-me' data-animation="diagonal" >
            <h2>Sobre mi</h2>
            <div className='container-me' data-animation="diagonal" >
              <img  src={"/image/profile-damianbermudez.png"} alt='Damian Bermudez desarrollador web'></img>
              <p data-animation="diagonal" >Hola!! Soy Damián Bermúdez, tengo 28 años y soy de Lobos - Provincia de Buenos Aires - Argentina. Soy <strong>Developer web full stack</strong>. Empece a estudiar programación de aplicaciones moviles en 2020, en un instituto de mi localidad, por cuestiones de tiempo (muchas materias y además trabajo en un fabrica metalurgica 9 horas) tuve que dejar. Empece de forma autodidacta estudiando desarrollado web y quede encantado. Fui adquiriendo los conocimientos basicos hasta que me tope con un anuncio en las redes sociales de la plataforma <a class="enlace-carrera"  href="https://apx.school/" >APX
              <span class="border border-top"></span>
              <span class="border border-right"></span>
              <span class="border border-bottom"></span>
              <span class="border border-left"></span>
              </a> donde actualmente estoy cursando la carrera de programacion web full stack.</p>
            </div>     
      </section>
      <section className='lasts-works' >
            <h2 className='heading'>Proyectos</h2>
            <p>Estos son algunos de mis trabajos como desarrollador web</p>
            <ListadoTrabajos limite="2"/>
            <div>
                <p className='parrafo-contacto' data-animation="diagonal">
                  Te ayudo a crear tu sitio o aplicacion web para tener mas visibilidad y relevancia en internet. <NavLink className="enlace-contacto" to="/contacto">Contactate
                  <span class="border border-top"></span>
                  <span class="border border-right"></span>
                  <span class="border border-bottom"></span>
                  <span class="border border-left"></span>
                  </NavLink>
                </p>
            </div>
            
      </section>
    </div>
    
  )
}
