import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
export const MisRutas = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/inicio' element={<Inicio/>}>      
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
