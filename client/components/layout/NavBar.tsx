import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
export default function Nav() {

  const { logout, loginWithRedirect, user } = useAuth0()

  const handleSignOut = () => logout()
  const handleSignIn = () => loginWithRedirect()

  return (
    <nav>
      <div className="border-t-8 border-[#ffc51d]"></div>
      <div className="bg-[#194036] flex items-center shadow-[3px_6px_10px_rgba(0,_0,_0,_0.4)] px-3 justify-between z-2 mb-2">
      <NavLink to="/">
      <img src="/images/logo.png" alt="Logo of we hike" className="h-[60px] ml-20 mr-auto"/>
      </NavLink>
      <div className="px-9 text-white flex items-center no-underline">
      <NavLink className="ml-auto mr-11 flex" to="/">Home</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/huts">Huts</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/tracks/region">Hikes</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/about">About</NavLink>
      <NavLink className="ml-auto mr-11 flex" to="/reviews">Reviews</NavLink>
          <IfAuthenticated>
          <div className="flex flex-col items-center space-y-2">
            <button className=" text-white text-sm mr-2 hover:sm-black-500" onClick={handleSignOut}>Sign out</button>
            {user && <p className="text-sm text-white">User: {user?.nickname}</p>}
          </div>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <button  className=" text-white border-lg rounded-full bg-[#4d6c40] text-sm px-1" onClick={handleSignIn}>Sign in</button>
          </IfNotAuthenticated>
      </div>
      </div>
    </nav>
  )
}