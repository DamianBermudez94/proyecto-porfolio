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
            <article key={trabajo.id} >
              <h2> <Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
              <div className='content-img'>
                <img src={"/image/"+trabajo.id+".png"} alt='' />
              </div>
              <span>{trabajo.categorias}</span>
             
              <p>{trabajo.description}</p>
            </article>
            
          )
        })
      }
    </div>
  )
}
