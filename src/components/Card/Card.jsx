import React from 'react'
import './Card.css'

const Card = (props) => {
  const {name, location, description, image, time, days, verified} = props
  return (
    <div className='papa'>

      <div className='hijo' style={{backgroundImage: `url(${image})`}}>
        <div className="xx">
          <p className="name">{name}</p>
            {verified ? <i className="fa-regular fa-circle-check check"/> : ''}
        </div>
          <p className="location">{location}</p>
      </div>
        <p>{description}</p>
        <div className="date-info">
        <span>{'Días: ' + days}</span>
            <br/>
      <span>{'Horas: ' + time}</span>
        </div>
    </div>
  )
}

export default Card