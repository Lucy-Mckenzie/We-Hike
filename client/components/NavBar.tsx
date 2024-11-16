import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
export default function Nav() {

  const { logout, loginWithRedirect, user } = useAuth0()

  const handleSignOut = () => logout()
  const handleSignIn = () => loginWithRedirect()

  return (
    <nav>
      <div className="border-t-8 border-[#FFD700]"></div>
      <div className="bg-[#004F23] flex items-center shadow-[3px_6px_10px_rgba(0,_0,_0,_0.4)] py-2 px-3 justify-between z-2">
      <NavLink to="/tracks">
      <img src="/images/wehike.jpeg" alt="Logo of we hike" className="h-[40px] ml-20 mr-auto"/>
      </NavLink>
      <div className="px-9 py-0 text-white flex items-center no-underline">
      <NavLink className="ml-auto mr-11 flex" to="/">Home</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/huts">Huts</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/tracks">Map of all hikes</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/tracks/region">Hikes</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/about">About</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/reviews">Reviews</NavLink>
          <IfAuthenticated>
          <div className="flex flex-col items-center space-y-2">
            <button className=" py-2 text-white text-sm mr-2 hover:sm-black-500" onClick={handleSignOut}>Sign out</button>
            {user && <p className="text-sm text-white">User: {user?.nickname}</p>}
          </div>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button  className="px-4 py-2 text-white border-lg rounded-full bg-[#4d6c40] text-sm" onClick={handleSignIn}>Sign in</button>
          </IfNotAuthenticated>
      </div>
      </div>
    </nav>
  )
}