import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/huts">Huts by region</NavLink>
      <NavLink to="/tracks">find by region</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}