import React from 'react';
import { NavLink } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const ListadoTrabajos = ({limite=10}) => {
  return (
        <section className='works'>
        {
          trabajos.slice(0,limite).map((trabajo)=>{
            return(
              <article key={trabajo.id} className='works-item' >
               
                <div className='content-img'>
                  <img src={"/image/"+trabajo.id+".png"} alt='' />
                </div>
                <h2>{trabajo.nombre}</h2>
                <span>{trabajo.categorias}</span>
                <span>{trabajo.tecnologias}</span>
                <span>{trabajo.description}</span>
                <NavLink className="btn-demo" to={trabajo.url} target='_blank'>Demo</NavLink>
                <NavLink className="btn-git" to={trabajo.git} target='_blank'>Git</NavLink>
              </article>
              
            )
          })
        }
      </section>
  )
}
