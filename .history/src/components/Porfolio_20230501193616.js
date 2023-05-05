import React from 'react'
import { trabajos } from '../data/trabajos'
export const Porfolio = () => {
  return (
    <div>
      <h1 className='heading'>Porfolio</h1>
      {
        trabajos.map((trabajo)=>{
          return(
            <div>
              <span>{trabajo.categorias}</span>
              <h1>{trabajo.nombre}</h1>
              <p>{trabajo.description}</p>
            </div>
            
          )
        })
      }
    </div>
  )
}
