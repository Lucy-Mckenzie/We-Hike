import { NavLink } from 'react-router-dom'
import logo from '../public/logo.png'
export default function Nav() {
  return (
    <nav>
      <NavLink to="/">
      <img src={logo} alt="Logo" className="logo" />
      </NavLink>
      <div className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/huts">Huts by region</NavLink>
      <NavLink to="/tracks">find by region</NavLink>
      <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}