import React from 'react'
import './Card.css'
import imagenprueba from './recurses/Captura.PNG'

const Card = () => {
  return (
    <div class='papa'>
      <div class='hijo'>
         {/* <img src={imagenprueba}  alt=""  /> */}
         <div class="xx">
         <p>paola (30)</p>
         <p>Bogota</p>
         </div>
         
      </div>
      
      <p>Me caracterizo por mi alto sentido de pertenencia, orientación al servicio, liderazgo, puntuali...</p>
      
    </div>
  )
}

export default Card