import React from 'react'
import './Card.css'

const Card = (props) => {

  return (
    <div className='papa'>
      <div className='hijo'>
         {/* <img src={imagenprueba}  alt=""  /> */}
         <div className="xx">
         <p>{props.name}</p>
         <p>Bogota</p>
         </div>
         
      </div>
      
      <p>Me caracterizo por mi alto sentido de pertenencia, orientación al servicio, liderazgo, puntuali...</p>
      
    </div>
  )
}

export default Card