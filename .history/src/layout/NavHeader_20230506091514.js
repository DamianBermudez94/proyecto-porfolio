import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavHeader.css'
export const NavHeader = () => {
  return (
    <header className='header'>
            <div className='logo'>
                <NavLink to="/inicio"><img src={"/image/LogoDamiRoboto.png"} alt='Damian Bermudez desarrollador web'></img></NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/porfolio" className={({isActive}) => isActive ? "active" : ""}>porfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum" className={({isActive}) => isActive ? "active" : ""}>curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : ""}>contacto</NavLink>
                    </li>
                </ul>
            </nav>
    </header>
  )
}
