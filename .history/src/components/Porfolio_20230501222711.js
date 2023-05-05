import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'
export const Porfolio = () => {
  return (
    <div>
      <h1 className='heading'>Porfolio</h1>
      <div className='works'>
        {
          trabajos.map((trabajo)=>{
            return(
              <article key={trabajo.id} className='works-item' >
               
                <div className='content-img'>
                  <img src={"/image/"+trabajo.id+".png"} alt='' />
                </div>
                <h2> <Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
                <span>{trabajo.categorias}</span>
                <span>{trabajo.tecnologias}</span>
               
              </article>
              
            )
          })
        }
      </div>
     
    </div>
  )
}
