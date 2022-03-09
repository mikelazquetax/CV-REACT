import React from 'react';
import './Portfolio.scss';
import Proyecto from './Proyecto';

export default function Portfolio({
    portfolio
}) {
  return (
    <div className='portfolio'>
        <h2 className='portfolio__title'>Proyectos</h2>
        <div className='portfolio__wrap'>
            { portfolio.map((proyecto, index)=>{
                return(
                <Proyecto key={proyecto.alt + index} proyecto={proyecto}/>
                )
            }) }
        </div>
    </div>
  )
}
