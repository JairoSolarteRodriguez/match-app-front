/* import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [loggin, setLoggin] = useState(true)

  const handleLoggin = () =>{
    setLoggin(!loggin)
  }

  return (
    <header>
      <div>
        <Link to='/'><h1 className='logo'>Match-Up</h1></Link>
        <ul>
          <li><Link to='/'>Inicio</Link></li>
          <li><Link to='/about'>Acerca de</Link></li>
          <li onClick={handleLoggin} className='loggin'>{loggin ? 'Loggin' : 'Loggout'}</li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar // export function

 */