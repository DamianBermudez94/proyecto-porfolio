import React from 'react'

export const Contacto = (props) => {
  console.log("soy la props",props);

  return (
    <div className='container-form' data-animation="diagonal">
      <h1 className='heading'>Contacto</h1>
      
      <form id="formulario" action="mailto:bermudezdamian7@gmail.com" >
          <input type="text" id="nombre" name="nombre" />
          <label className='nombre'>Escriba su nombre...</label>
          <input type="tel"  id="telefono" name="telefono" />
          <label className='telefono'>Escriba su numero de telefono...</label>
          <input type="email" id="email" name="correo" />
          <label className='email'>Escriba email...</label>
          <textarea name="mensaje" id="mensaje" >
          <label className='textarea'>Deje su mensaje......</label>
          </textarea>
          
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
