import React from 'react'

export const Contacto = (props) => {
  console.log("soy la props",props);

  return (
    <div className='container-form' data-animation="diagonal">
      <h1 className='heading'>Contacto</h1>
      
      <form id="formulario" action="mailto:bermudezdamian7@gmail.com" >
          <input type="text" id="nombre" name="nombre" placeholder="Escriba su nombre..."/>
          <input type="tel"  id="telefono" name="telefono" placeholder="Escriba su numero de telefono..."/>
          <input type="email" id="email" name="correo" placeholder="Escriba su email..."/>
          <textarea name="mensaje" id="mensaje" placeholder="Deje su mensaje......"></textarea>
          <button type="submit" className="btn-enviar mostrarArriba">Enviar mensaje
                  <span class="border border-top"></span>
                  <span class="border border-right"></span>
                  <span class="border border-bottom"></span>
                  <span class="border border-left"></span>
          </button>
          <div className="mensaje-form">
            <p>No dudes en consultarme, te estare respondiendo a la brevedad</p>
          </div>
         
        </form>
    </div>
  )
}
