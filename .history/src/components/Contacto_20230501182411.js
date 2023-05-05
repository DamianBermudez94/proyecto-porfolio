import React from 'react'

export const Contacto = () => {
  return (
    <div>
      <form>
        <input type="text" name='nombre' placeholder='nombre...'/>
        <input type="text" name='apellidos' placeholder='apellidos'/>
        <input type='email' name='email' placeholder='email'/>
        <textarea placeholder='motivo del contacto'/>
        <input type='submit' value="Enviar" />
      </form>
    </div>
  )
}
