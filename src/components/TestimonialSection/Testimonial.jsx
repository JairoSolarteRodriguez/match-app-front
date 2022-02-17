import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./Testimonial.css"

const Testimonial = () => {
  return <>
      <div className="c-testimonial_d">
        <div className="c-testimonial_contenedor"><h3 className="c-testimonial_tittle">Opiniones de nuestros usuarios</h3></div>
        <section className="c-testimonial">
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
          </section>

      </div>
  </>
}

export default Testimonial
