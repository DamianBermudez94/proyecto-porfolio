import React from 'react';
import { NavLink } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const ListadoTrabajos = ({limite=10}) => {
  return (
        <section className='works'>
        {
          trabajos.slice(0,limite).map((trabajo)=>{
            return(
              <article key={trabajo.id} className='works-item'  data-animation="diagonal">
               
                <div className='content-img'>
                  <img src={"/image/"+trabajo.id+".png"} alt='' />
                </div>
                <h2>{trabajo.nombre}</h2>
                <div className='container-card_info' data-animation="diagonal">
                   <p><span>{trabajo.categorias}</span></p>
                   <p><span>{trabajo.tecnologias}</span></p> 
                   <p><span>{trabajo.description}</span></p>
                  <NavLink className="enlace-proyectos enlace" to={trabajo.url} target='_blank'>Demo
                          <span class="border border-top"></span>
                          <span class="border border-right"></span>
                          <span class="border border-bottom"></span>
                          <span class="border border-left"></span>
                    </NavLink>
                    <NavLink className="enlace-proyectos enlace" to={trabajo.git} target='_blank'>Git
                      <span class="border border-top"></span>
                      <span class="border border-right"></span>
                      <span class="border border-bottom"></span>
                      <span class="border border-left"></span>
                    </NavLink>
                </div>
                
              </article>
              
            )
          })
        }
      </section>
  )
}
