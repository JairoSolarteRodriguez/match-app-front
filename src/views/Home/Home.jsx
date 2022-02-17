import React from 'react'
import ListOfCards from '../../components/ListOfCards/ListOfCards'
import Hero from '../../components/Hero/Hero'
import './Home.css'

const Home = () => {
  return <>
    <Hero />
    <h2 className='subtitle'>Personas con tiempo libre</h2>
    <ListOfCards />
  </>
}

export default Home