import React from 'react'

export default function SingleExp({exper}) {

  return (
    <div className='block'>
        <h3>{exper.title}</h3>
        <h4>{exper.center}</h4>
        {exper.localidad.map((ciudad, index)=>{
         return  <p key={index}> 🏙️ {ciudad.toUpperCase()}</p>
   
        })}
        <h4>{exper.year}</h4>
        <h5>{exper.description}</h5>

          

    </div>
  )
}
