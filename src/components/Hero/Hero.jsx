import './Hero.css'
import imageHero from './undraw_time_management_re_tk5w.svg'

const Hero = () => {
    return <div className="c-hero">
        <h1 className= "c-hero__title">Yo tengo tiempo,<br/> 
            ¿Y tú? ¿qué hacemos?
        </h1>
        <img src={ imageHero } alt="hero_imagen" className="c-hero__img" />
    </div>
}

export default Hero