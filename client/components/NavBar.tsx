import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <NavLink to="/hikes">All hikes</NavLink>
      <NavLink to="/tracks">find by region</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}