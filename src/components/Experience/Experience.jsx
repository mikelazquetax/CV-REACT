import React from 'react';
import './Experience.scss'
import SingleExp from './SingleExp';

export default function Experience({curriculumSections}) {
  return (
    <div className='experience'>
        <h2 className='experience__title'>Experiencia Laboral</h2>
        <div className='experience__section'>
            {curriculumSections.map((exper, index)=>{
                return(
                   <SingleExp key={index} exper={exper}/>
                )
            })}
        </div>
    </div>
  )
}
