import React from 'react'
import { trabajos } from '../data/trabajos'
export const Porfolio = () => {
  return (
    <div>
      <h1 className='heading'>Porfolio</h1>
      {
        trabajos.map((trabajo)=>{
          return(
            <h1>{trabajo.nomre}</h1>
          )
        })
      }
    </div>
  )
}
