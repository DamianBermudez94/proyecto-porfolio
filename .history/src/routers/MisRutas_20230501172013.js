import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './style.css'
import { Inicio } from '../components/Inicio'
import { Porfolio } from '../components/Porfolio'
import { Servicios } from '../components/Servicios'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'
import { NavHeader } from '../layout/NavHeader'
import { Footer } from '../layout/Footer'
export const MisRutas = () => {
  return (
    <div>
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
                  <Route path='/curriculum' element={<Curriculum/>}/>
                  <Route path='/contacto' element={<Contacto/>}/> 
          </Routes>
        </section>
            

         {/* Footer*/ }
            <Footer/>
        </BrowserRouter>
    </div>
  )
}
