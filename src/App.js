import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'
import About from './views/About/About';
import Hero from './components/Hero/Hero';

function App() {
  return <>
    <Navbar/>
    <Hero />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/home/:id' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
  </>
}

export default App;
