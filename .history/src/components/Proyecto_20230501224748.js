import React from 'react'
import { useParams } from 'react-router-dom'

export const Proyecto = () => {
    //Usamos el useParams para poder recibir la url como parametro
    const params = useParams();
  return (
    <div>
        <h1>{params.nombre}</h1>

    </div>
  )
}
