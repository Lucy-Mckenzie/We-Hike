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
      <NavLink to="/huts">Huts</NavLink>
      <NavLink to="/tracks/region">Hikes</NavLink>
      <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}