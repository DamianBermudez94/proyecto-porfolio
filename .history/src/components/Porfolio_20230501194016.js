import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'
export const Porfolio = () => {
  return (
    <div>
      <h1 className='heading'>Porfolio</h1>
      {
        trabajos.map((trabajo)=>{
          return(
            <div>
              <div>
                <img>{trabajo.id}</img>
              </div>
              <span>{trabajo.categorias}</span>
              <h2> <Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
              <p>{trabajo.description}</p>
            </div>
            
          )
        })
      }
    </div>
  )
}
