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
    </nav>
  )
}

export default Navbar