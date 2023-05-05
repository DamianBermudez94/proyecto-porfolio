import React from 'react'
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    //Usamos el useParams para poder recibir la url como parametro
    const params = useParams();
    // Usamos el useEffect para que automaticamente se actulice el componente
  return (
    <div>
        <h1>{params.id}</h1>
        

    </div>
  )
}
