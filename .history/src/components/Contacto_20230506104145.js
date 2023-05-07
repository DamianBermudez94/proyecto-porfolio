import React,{useState} from 'react'

export const Contacto = () => {
  const [usuario, setUsuraio] = useState({});

  const DatosUsuarios = e =>{
      e.preventDefault();
      const datos = e.target;
      console.log(datos.nombre.value);
      const usuario = {
          nombre: datos.nombre.value,
          apellido: datos.apellido.value,
          telefono: datos.telefono.value,
          texto: datos.texto.value,
      }
      setUsuraio(usuario)
      console.log(usuario)}

 
    function handleSubmit(e) {
      e.preventDefault();
      const datos = e.target;
      console.log("soy los datos",datos)
      const form = new FormData(this);
      console.log("soy el form",form);
      datos.setAttribute(
        "href",
        `mailto:bermudezdamian7@gmail.com?subject= Nombre:${form.get(
          "nombre"
        )}Email:${form.get("correo")} Telefono:${form.get(
          "telefono"
        )}&body=${form.get("mensaje")} `
      );
     console.log(datos);
      datos.click();
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
