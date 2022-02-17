import React, {useState} from "react"
import "./Card.css"
import {useLocation} from "react-router-dom";

const Card = (props) => {
    const [isShown, setIsShown] = useState(false);
    const regex = new RegExp( "(?:^|(?:[.!?]\\s))(\\w+)");
    const {pathname} = useLocation();
  const { name, location, description, image, time, days, verified, detail } = props
  return (
    <div className="papa" onMouseEnter={() => setIsShown(true)}
         onMouseLeave={() => setIsShown(false)}>
      <div className="hijo" style={{ backgroundImage: `url(${image})` }}>
          {isShown && (
              <div className="hover-layer">
                  <button className="btn btn-icon">
            Contact {name.split(regex)[1]}!
                  </button>
              </div>
          )}
        <div className="xx">
          <div className="name-card">
            <p className="name">{name}</p>
            {verified ? <i className="fa-regular fa-circle-check check" /> : ""}
          </div>
          <p className="location">
              <i className="fa-solid fa-location-dot"/>{' ' + location}</p>
        </div>
      </div>
      <p className={detail === true ? 'description' : ''}>{description}</p>
      <div className="date-info">
        <span>{"Días: " + days}</span>
        <br />
        <span>{"Horas: " + time}</span>
      </div>
    </div>
  )
}

export default Card
