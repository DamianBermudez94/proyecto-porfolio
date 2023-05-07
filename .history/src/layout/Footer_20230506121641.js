import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <footer class="footer">
    <div className="contenedor-footer container">
        <div className="redes-sociales">
            <a href="https://www.facebook.com" className="link-redes_sociales" ><i className="fab fa-facebook facebook"></i></a>
            <a href="https://www.instagram.com" className="link-redes_sociales" ><i className="fab fa-instagram instagran"></i></a>
            <a href="https://www.linkedin.com" className="link-redes_sociales" ><i className="fab fa-linkedin linkedin"></i></a>
            <a href="https:/www.github.com" className="link-redes_sociales" ><i className="fab fa-github-square github"></i></a>
        </div>
        <div className="footer-text">
            <p className="title-copy">Hecho por<a className="title-footer" href="https://damianbermudezdev.es/">DB|WEB</a></p>
        </div>
    </div>
</footer>
  )
}
