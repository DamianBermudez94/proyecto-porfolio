import { Contacto } from "../components/Contacto";
export function enviarFormulario(props) {
    const form = document.querySelector("#formulario");
    console.log("soy el formulario", form);
    const buttonEnviar = document.querySelector("#enviar-mail");
    console.log(buttonEnviar);
    form.addEventListener("submit", handleSubmit);
    function handleSubmit(event) {
      event.preventDefault();
      const form = new FormData(this);
      buttonEnviar.setAttribute(
        "href",
        `mailto:bermudezdamian7@gmail.com?subject= 
            Nombre:${form.get("nombre")}
            Email:${form.get("correo")} 
            Telefono:${form.get("telefono")
            }&body=${form.get("mensaje")} `
      );
      console.log(buttonEnviar);
      buttonEnviar.click();
    }
  }
  
