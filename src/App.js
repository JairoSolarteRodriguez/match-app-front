
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar' // llamado al componente.
import Testimonial from './components/TestimonialSection/Testimonial'
import About from './views/About/About'
import Footer from './components/Footer/Footer'

function App() {
  return <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/home/:idUrl' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
    <Testimonial/>
    <Footer/>
    
  </>
}

export default App;
