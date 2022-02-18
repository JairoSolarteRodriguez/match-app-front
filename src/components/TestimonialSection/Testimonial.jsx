import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import './Testimonial.css'
const Testimonial = () => {
    return <section className="c-testimonial">

      <h1 className="c-testimonial_tittle">Opiniones de nuestros usuarios</h1>
      

      <div className="c-testimonial__content-text">

        <div className="c-testimonial_div"><p>¡Genial! Encontré justo la persona ideal para hacer tai-chí.</p>
          <div>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
          </div>
        </div> 

          <div className="c-testimonial_div">
              <p>
              ¡Buen servicio! Realmente necesitaba que mi perro saliera a pasear.
              </p>
              <div>
              <FontAwesomeIcon icon={faStar} className="c-testimonial_icon" />
              <FontAwesomeIcon icon={faStar} className="c-testimonial_icon" />
              <FontAwesomeIcon icon={faStar} className="c-testimonial_icon" />
              <FontAwesomeIcon icon={faStar} className="c-testimonial_icon" />
              <FontAwesomeIcon icon={faStar} className="c-testimonial_icon" />
              </div>
          </div>

        <div className="c-testimonial_div"><p>La aplicación esta muy bien, pude encontar una persona que me ayudó con mi mudanza.</p>
          <div>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
          </div>
        </div>

        <div className="c-testimonial_div"><p>Lo que le falta son más personas para encontrar coincidencias, pero vale la pena.</p>
          <div>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
          </div>
        </div>

        <div className="c-testimonial_div"><p>Si no fuera por MatchUp mi madre no podría salir acompañada a dar paseos por las mañanas, gracias Paco!!!.</p>
          <div>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
            <FontAwesomeIcon icon={faStar}
            className="c-testimonial_icon"/>
          </div>
        </div>

      </div>

    </section>
}

export default Testimonial
