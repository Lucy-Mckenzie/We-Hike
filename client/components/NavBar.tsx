import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="borderLine"></div>
      <NavLink to="/">
      <img src="/images/wehike.jpeg" alt="Logo" className="logo" />
      </NavLink>
      <div className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/huts">Huts</NavLink>
      <NavLink to="/tracks/region">Hikes</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      </div>
    </nav>
  )
}