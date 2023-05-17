import React from 'react'
import { NavLink } from 'react-router-dom';
export const Servicios = () => {
  return (
    <div>
       <section className="section-servicios animacionIzquierda" id="mis-servicios">
            <h3 className="title-servicios" >Mis Servicios</h3>
            <div className="container-card_servicios">
                <article class="card">
                        <div class="card__inner">
                            <div class="card__side card__side--front">
                                <div class="card__image-wrapper">
                                    <img
                                        src="./image/graphic-design.png"
                                        alt=""
                                        class="card__image"
                                    />
                                </div>
                                <div class="card__body card__body--flex">
                                    <h2 class="card__title">Hisma Desert</h2>
                                    <span class="card__arrow">&rarr;</span>
                                </div>
                            </div>
                            <div class="card__side card__side--back">
                                <div class="card__body">
                                    <p>
                                    Mi trabajo se basa en el desarrollo de las interfaces de usuario para Singles Pages Apps montadas en la web, utilizando diferentes hostings para poder alojarlas. Donde tambíen consumo API´s REST para poder montar el contenido. Utilizando el paradigma de programación reactiva por medio de un estado y routers para mantener actualizados los entornos y redirigir la navegación. Lo que permite que el mismo entorno sea suceptible y escuche los cambios que vengan desde diferentes puntos de de la App.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="card">
                        <div class="card__inner">
                            <div class="card__side card__side--front">
                                <div class="card__image-wrapper">
                                    <img
                                        src="./image/software.png"
                                        alt=""
                                        class="card__image"
                                    />
                                </div>
                                <div class="card__body card__body--flex">
                                    <h2 class="card__title">Hisma Desert</h2>
                                    <span class="card__arrow">&rarr;</span>
                                </div>
                            </div>
                            <div class="card__side card__side--back">
                                <div class="card__body">
                                    <p>
                                    Mi trabajo se basa en el desarrollo de las interfaces de usuario para Singles Pages Apps montadas en la web, utilizando diferentes hostings para poder alojarlas. Donde tambíen consumo API´s REST para poder montar el contenido. Utilizando el paradigma de programación reactiva por medio de un estado y routers para mantener actualizados los entornos y redirigir la navegación. Lo que permite que el mismo entorno sea suceptible y escuche los cambios que vengan desde diferentes puntos de de la App.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                    
            </div>
            <div className="container-cv">
                <a className="btn-cv" href="./archivo-pdf/Damián Bermúdez (5).pdf" download="CV-damian-bermudez.pdf">Descargar CV</a>
                <p>Como Desarrollador FullStack, creo mis propias API´s REST para que puedan ser consumidas facimente por un FrontEnd utilizando el esquema MVC (Model/View/Controller). Donde utilizo Postman para diseñar y los endpoints, Node.Js con Express para el montado y brindando la capacidad de alojar la data consumida tanto en una base de datos SQL como No-SQL. Sumandole el uso de algunas bases de datos extras como Algolia para poder efectuar busquedas complejas.</p>
                            <NavLink to="/contacto">Más info</NavLink>
            </div>
        </section>

    </div>
  )
}
