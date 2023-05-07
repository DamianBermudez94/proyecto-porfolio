import React,{useState} from 'react'

export const Contacto = () => {
  const [usuario, setUsuraio] = useState({});

    function handleSubmit(e) {
      e.preventDefault();
      const datos = e.target;
          const usuario = {
            nombre: datos.nombre.value,
            correo:datos.correo.value,
            telefono: datos.telefono.value,
            texto: datos.mensaje.value,
        }
     console.log(datos);
      console.log("soy los datos",datos)
      const form = new FormData(this);
      console.log("soy el form",form);
      usuario.setAttribute(
        "href",
        `mailto:bermudezdamian7@gmail.com?subject= Nombre:${form.get(
          "nombre"
        )}Email:${form.get("correo")} Telefono:${form.get(
          "telefono"
        )}&body=${form.get("mensaje")} `
      );
     console.log(usuario);
     usuario.click();
     setUsuraio(usuario)
    }
  

  return (
    <div className='container-form'>
      <h1 className='heading'>Contacto</h1>
      
      <form id="formulario" onSubmit={handleSubmit}>
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
