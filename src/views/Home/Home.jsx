import React from 'react'
import ListOfCards from '../../components/ListOfCards/ListOfCards'
import './Home.css'

const Home = () => {
  return <>
    <h2 className='subtitle'>Personas con tiempo libre</h2>
    <ListOfCards/>
  </>
}

export default Home