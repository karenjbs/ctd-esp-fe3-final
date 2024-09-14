<<<<<<< HEAD
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ContextGlobal)

  const handleThemeChange = () => {
    toggleTheme()
  }

  const navClass = theme === 'light' ? 'navbar-light' : 'navbar-dark';

  return (
    <nav className={navClass} >

      <img src="/images/DH.png" alt="Doctor" className="nav-image" />
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favorites</Link>

      <button onClick={handleThemeChange}>
      {theme === 'light' ? '🌙' : '🌞'}
      </button>
=======
import React from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
>>>>>>> 6760254ed6b09c7865f90022f05344b326c232aa
    </nav>
  )
}

export default Navbar