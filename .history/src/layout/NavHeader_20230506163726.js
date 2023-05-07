import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './NavHeader.css'
export const NavHeader = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      //cuando esta true lo pasa a false y vice versa
      console.log(clicked);
      setClicked(!clicked)
    }
  return (
    <header className='header'>
            <div className='logo'>
                <NavLink to="/inicio"><img src={"/image/LogoDamiRoboto.png"} alt='Damian Bermudez desarrollador web'></img></NavLink>
            </div>
            <span className="menu-active" clicked={handleClick}><i className="fas fa-bars "></i></span>
            <nav onClick={({isActive})=> isActive ? "menu-active" : ""}>
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
                        <NavLink to="/conocimientos" className={({isActive}) => isActive ? "active" : ""}>conocimientos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : ""}>contacto</NavLink>
                    </li>
                </ul>
            </nav>
    </header>
  )
}
