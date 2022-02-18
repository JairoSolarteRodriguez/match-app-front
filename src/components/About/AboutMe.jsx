import './AboutMe.css'

const AboutMe = () => {
  return <main className='about-me'>
    <h2 className='subtitle'>Sobre Nosotros</h2>
    <div className='about-me-container'>
      <p>Match-up es un marketplace donde encontrarás personas que tienen tiempo libre  y comparten tus intereses para realizar algún tipo de trabajo o actividad que sea repetitiva o tediosa y que se haga en periodos de tiempo cortos.</p>
      <img className="about-me-img" src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/139307/139307_00_2x.jpg" alt="grupo de personas"/>
    </div>
  </main>
}

export default AboutMe