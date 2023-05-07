import React from 'react'

export const Contacto = () => {
  function enviarFormulario() {
    const form = document.querySelector("#formulario");
    console.log(form);
    const buttonEnviar = document.querySelector("#enviar-mail");
    console.log("soy el boton",buttonEnviar);
    form.addEventListener("submit", handleSubmit);
    function handleSubmit(event) {
      event.preventDefault();
      const form = new FormData(this);
      buttonEnviar.setAttribute(
        "href",
        `mailto:bermudezdamian7@gmail.com?subject= Nombre:${form.get(
          "nombre"
        )}Email:${form.get("correo")} Telefono:${form.get(
          "telefono"
        )}&body=${form.get("mensaje")} `
      );
      console.log(buttonEnviar);
      buttonEnviar.click();
    }
  }
  console.log("soy la funcion",enviarFormulario());
  return (
    <div className='container-form'>
      <h1 className='heading'>Contacto</h1>
      
      <form id="formulario" onSubmit={enviarFormulario}>
          <input type="text" id="nombre" name="nombre" placeholder="Escriba su nombre..."/>
          <input type="tel"  id="telefono" name="telefono" placeholder="Escriba su numero de telefono..."/>
          <input type="email" id="email" name="correo" placeholder="Escriba su email..."/>
          <textarea name="mensaje" id="mensaje" placeholder="Deje su mensaje......"></textarea>
          <button type="submit" id='#enviar-mail'  className="btn-enviar mostrarArriba">Enviar mensaje</button>
          <div className="mensaje-form">
            <p>No dudes en consultarme, te estare respondiendo a la brevedad</p>
          </div>
        
        </form>
    </div>
  )
}
