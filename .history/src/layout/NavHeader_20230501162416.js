import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavHeader = () => {
  return (
    <header>
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
    </header>
  )
}
