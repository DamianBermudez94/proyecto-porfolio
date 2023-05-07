import { Contacto } from "../components/Contacto";
export function enviarFormulario() {
    const form = document.querySelector(Contacto);
    console.log("soy el formulario", form);
    const buttonEnviar = document.querySelector("#enviar-mail");
    console.log(buttonEnviar);
    form.addEventListener("click", handleSubmit);
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
  
