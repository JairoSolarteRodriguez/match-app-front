import React from 'react'
import './Card.css'

const Card = (props) => {
  const {name, location, description, image, time} = props
  return (
    <div className='papa'>
      <div className='hijo' style={{backgroundImage: `url(${image})`}}>
        <div className="xx">
          <p>{name}</p>
          <p>{location}</p>
        </div>   
      </div>
      <p>{description}</p>
      <span>{time}</span>
    </div>
  )
}

export default Card