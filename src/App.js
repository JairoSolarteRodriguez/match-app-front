import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar' // llamado al componente.
import Hero from './components/Hero/Hero';

function App() {
  return <>
    <Navbar/>
    <Hero />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
    </Routes>
  </>
}

export default App;
