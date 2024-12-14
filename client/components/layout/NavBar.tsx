import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
export default function Nav() {

  const { logout, loginWithRedirect, user } = useAuth0()

  const handleSignOut = () => logout()
  const handleSignIn = () => loginWithRedirect()

  return (
    <nav className="relative">
      <div className="bg-[##1C1C1C] flex items-center shadow-[3px_6px_10px_rgba(0,_0,_0,_0.04)] px-6 py-2 justify-between z-2">
      <NavLink to="/">
      <img src="/images/logo.png" alt="Logo of we hike" className="h-[50px] ml-20 mr-auto z-1"/>
      </NavLink>
      <div className="px-9 text-white flex items-center no-underline">
      <NavLink className="ml-auto mr-11 flex text-black" to="/">Home</NavLink>
      <NavLink className="ml-auto mr-11 flex text-black" to="/huts">Huts</NavLink>
      <NavLink className="ml-auto mr-11 flex text-black" to="/tracks/region">Hikes</NavLink>
      <NavLink className="ml-auto mr-11 flex text-black" to="/about">About</NavLink>
      <NavLink className="ml-auto mr-11 flex text-black" to="/reviews">Reviews</NavLink>
          <IfAuthenticated>
          <div className="flex flex-col items-center space-y-2">
            <button className=" text-white text-sm mr-2 hover:sm-black-500" onClick={handleSignOut}>Sign out</button>
            {user && <p className="text-sm text-white">User: {user?.nickname}</p>}
          </div>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button  className="border-lg rounded-lg bg-[#4A5D5E] text-sm px-2 py-1 text-white" onClick={handleSignIn}>Sign in</button>
          </IfNotAuthenticated>
      </div>
      </div>
    </nav>
  )
}