import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Porfolio } from '../components/Porfolio'
import { Servicios } from '../components/Servicios'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'
export const MisRutas = () => {
  return (
    <div>
        <BrowserRouter>
        {/*Header y navegacion*/}
        <header>
            <div className='title-logo'>
                Damian Bermudez
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/porfolio">porfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum">curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        
        {/*Contenido general*/}
            <Routes>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/porfolio' element={<Porfolio/>}/>
                <Route path='/servicios' element={<Servicios/>}/>
                <Route path='/curriculum' element={<Curriculum/>}/>
                <Route path='/contacto' element={<Contacto/>}/> 
            </Routes>

         {/* Footer*/ }
        <footer>
            <p>porfolio - Damian Bermudez &copy;</p>
        </footer>   
        </BrowserRouter>
    </div>
  )
}
