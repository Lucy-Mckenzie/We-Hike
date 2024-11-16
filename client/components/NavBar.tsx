import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
export default function Nav() {

  const { logout, loginWithRedirect, user } = useAuth0()

  const handleSignOut = () => logout()
  const handleSignIn = () => loginWithRedirect()

  return (
    <nav>
      <div className="borderLine"></div>
      <NavLink to="/">
      <img src="/images/wehike.jpeg" alt="Logo" className="logo" />
      </NavLink>
      <div className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/huts">Huts</NavLink>
      <NavLink to="/tracks">Map of all hikes</NavLink>
      <NavLink to="/tracks/region">Hikes</NavLink>
      <NavLink to="/about">About</NavLink>
      <IfAuthenticated>
      <NavLink to="/reviews">Reviews</NavLink>
      </IfAuthenticated>
          <IfAuthenticated>
            <button className="nav-btn" onClick={handleSignOut}>Sign out</button>
            {user && <p>Signed in as: {user?.nickname}</p>}
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button className="nav-btn" onClick={handleSignIn}>Sign in</button>
          </IfNotAuthenticated>
      </div>
    </nav>
  )
}