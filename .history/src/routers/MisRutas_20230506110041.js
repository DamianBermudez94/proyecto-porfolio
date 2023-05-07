import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './style.css'
import { Inicio } from '../components/Inicio'
import { Porfolio } from '../components/Porfolio'
import { Servicios } from '../components/Servicios'
import { Conocimientos, Curriculum } from '../components/Conocimientos'
import { Contacto } from '../components/Contacto'
import { Error } from '../components/Error'
import { NavHeader } from '../layout/NavHeader'
import { Footer } from '../layout/Footer'
import { Proyecto } from '../components/Proyecto';

export const MisRutas = () => {
  return (
    <div className='container-rutas'>
        <BrowserRouter>
        {/*Header y navegacion*/}
           <NavHeader/>
        {/*Contenido general*/}
        <section className='content'>
          <Routes>
                  <Route path='/' element={<Navigate to="/inicio"/>}/>
                  <Route path='/inicio' element={<Inicio/>}/>
                  <Route path='/porfolio' element={<Porfolio/>}/>
                  <Route path='/servicios' element={<Servicios/>}/>
                  <Route path='/tecnologias-estudio' element={<Conocimientos/>}/>
                  <Route path='/contacto' element={<Contacto/>}/>
                  <Route path='/proyecto/:id' element={<Proyecto/>}/> 
                  <Route path='*' element={<Error/>}/> 
          </Routes>
        </section>
            

         {/* Footer*/ }
            <Footer/>
        </BrowserRouter>
    </div>
  )
}
