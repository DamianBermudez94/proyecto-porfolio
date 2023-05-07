import React from 'react'

export const Servicios = () => {
  return (
    <div>
       <section className="section-servicios animacionIzquierda" id="mis-servicios">
            <h3 className="title-servicios" >Mis Servicios</h3>
            <div className="container-card">
                
                <div className="card">
                    <div className="face face1-left">
                        <div className="content">
                            <img src="./image/graphic-design.png" alt="damian bermudez"/>
                            <h3>Frontend</h3>

                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Mi trabajo se basa en el desarrollo de las interfaces de usuario para Singles Pages Apps montadas en la web, utilizando diferentes hostings para poder alojarlas. Donde tambíen consumo API´s REST para poder montar el contenido. Utilizando el paradigma de programación reactiva por medio de un estado y routers para mantener actualizados los entornos y redirigir la navegación. Lo que permite que el mismo entorno sea suceptible y escuche los cambios que vengan desde diferentes puntos de de la App.</p>
                            <a href="#contacto">Más info</a>
                            
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1-right">
                        <div className="content">
                            <img src="./Img-proyectos/software.png" alt="damian bermudez"/>
                            <h3>Backend</h3>

                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Como Desarrollador FullStack, creo mis propias API´s REST para que puedan ser consumidas facimente por un FrontEnd utilizando el esquema MVC (Model/View/Controller). Donde utilizo Postman para diseñar y los endpoints, Node.Js con Express para el montado y brindando la capacidad de alojar la data consumida tanto en una base de datos SQL como No-SQL. Sumandole el uso de algunas bases de datos extras como Algolia para poder efectuar busquedas complejas.</p>
                            <a href="#contacto">Más info</a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-cv">
                <a className="btn-cv" href="./archivo-pdf/Damián Bermúdez (5).pdf" download="CV-damian-bermudez.pdf">Descargar CV</a>
            </div>
        </section>

    </div>
  )
}
