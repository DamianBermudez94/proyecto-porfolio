import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavHeader.css'
export const NavHeader = () => {
  return (
    <header className='header'>
            <div className='title-logo'>
                <span>D</span>
                <h3>Damian Bermudez</h3>
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
  )
}
