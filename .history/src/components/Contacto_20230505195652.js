import React from 'react'
import {enviarFormulario} from '../data/formulario'
export const Contacto = () => {
  enviarFormulario();
  return (
    <div className='container-form'>
      <h1 className='heading'>Contacto</h1>
      
      <form id="formulario">
          <input type="text" id="nombre" name="nombre" placeholder="Escriba su nombre..."/>
          <input type="tel"  id="telefono" name="telefono" placeholder="Escriba su numero de telefono..."/>
          <input type="email" id="email" name="correo" placeholder="Escriba su email..."/>
          <textarea name="mensaje" id="mensaje" placeholder="Deje su mensaje......"></textarea>
          <button type="submit" className="btn-enviar mostrarArriba">Enviar mensaje</button>
          <div className="mensaje-form">
            <p>No dudes en consultarme, te estare respondiendo a la brevedad</p>
          </div>
          <a className="btn-enviar" href="mailto:bermudezdamian7@gmail.com" target="_blank"  id="enviar-mail">Enviar</a>
        </form>
    </div>
  )
}
