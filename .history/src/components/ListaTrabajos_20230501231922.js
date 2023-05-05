import React,{ Link} from 'react';
import { trabajos } from '../data/trabajos';

export const ListaTrabajos = ({limite=2}) => {
  return (
    <div>
            <section className='works'>
        {
          trabajos.slice(0,limite).map((trabajo)=>{
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
      </section>

    </div>
  )
}
