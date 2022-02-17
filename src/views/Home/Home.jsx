import React from 'react'
import ListOfCards from '../../components/ListOfCards/ListOfCards'
import Hero from '../../components/Hero/Hero'
import './Home.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return <>
    <Hero />
    <h2 className='subtitle'>Personas con tiempo libre</h2>
    <ListOfCards />
    <Footer/>
  </>
}

export default Home