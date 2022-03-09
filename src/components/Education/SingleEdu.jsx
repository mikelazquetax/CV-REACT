import React from 'react';
import './SingleEdu.scss'

export default function SingleEdu({educ}) {
  return (
    <div className='block'>
        <h3>{educ.title}</h3>
        <h4>{educ.center}</h4>
        <h5>{educ.year}</h5>
        <h6>{educ.description}</h6>
    </div>
  )
}
