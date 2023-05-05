import React, { useEffect, useState, Link } from 'react'
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    // Creamos un estado 
    const [proyecto,setProyecto] = useState({})
    //Usamos el useParams para poder recibir la url como parametro
    const params = useParams();
    // Usamos el useEffect para que automaticamente se actulice el componente
    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id)
        setProyecto(proyecto[0])
    },[])
  return (
    <div>
       
       <article  className='works-item' >
               
               <div className='content-img'>
                 <img src={"/image/"+proyecto.id+".png"} alt='' />
               </div>
               <h2> <Link to={"/proyecto/"+proyecto.id}>{proyecto.nombre}</Link></h2>
               <span>{proyecto.categorias}</span>
               <span>{proyecto.tecnologias}</span>
              
             </article>
        

    </div>
  )
}
