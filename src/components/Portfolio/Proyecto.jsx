import React from 'react';
import './Proyecto.scss'

export default function Proyecto({proyecto}) {
  return (
        <div className='bloque'>
        
         <p>{proyecto.desc}</p>
        <div className='Proyecto'>
        <h5>{proyecto.alt}</h5>
        <img className='Proyecto__img' src={proyecto.url} alt={proyecto.alt}/>
        </div>
        </div>
  )
}
