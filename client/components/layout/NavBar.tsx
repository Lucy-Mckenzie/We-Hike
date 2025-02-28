import { NavLink } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

export default function Nav() {
  const context = useContext(ThemeContext)
  const { logout, loginWithRedirect, user } = useAuth0()

  if (!context) throw new Error('ThemeToggler must be used within a ThemeProvider')

  const { changedTheme } = context

  const handleSignOut = () => logout()
  const handleSignIn = () => loginWithRedirect()

  return (
    <div className='navbar bg-base-100 shadow-sm z-50'>
      <div className='navbar flex items-end'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16' />
            </svg>
          </div>
          <ul
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow overflow-visible'>
            <li>
              <NavLink
                className='transition'
                to='/weather'>
                  Weather
              </NavLink>
            </li>
            <li>
              <NavLink 
                className='transition' 
                to='/huts'>
                  Huts
              </NavLink>
            </li>
            <li>
              <NavLink 
                className='transition'
                to='/tracks/region'>
                  Hikes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/reviews' 
                className='transition'>
                  Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/alerts' 
                className='transition'>
                  Alerts
              </NavLink>
            </li>
            <li>
              <IfAuthenticated>
                <div className='flex flex-col items-center space-y-2'>
                  <button className=' text-sm mr-2 hover:text-gray-400 hover:scale-105 transition-transform duration-200 hover:cursor-pointer' onClick={handleSignOut}>Sign out</button>
                  {user && <p className='text-s'>User: {user?.nickname}</p>}
                </div>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <button  className='border-lg rounded-lg text-sm px-2 py-1 hover:scale-105 transition-transform duration-200 hover:cursor-pointer' onClick={handleSignIn}>Sign in</button>
              </IfNotAuthenticated>
            </li>
          </ul>
        </div>
        <div>
          <NavLink to='/'>
            <img 
              src='/images/logo.png' 
              alt='Logo of we hike' 
              className='lg:h-[40px] mr-auto z-1 hover:scale-105 transition-transform duration-200 hover:cursor-pointer lg:pb-2'
            />
          </NavLink>
        </div>
      </div>
  
      <div className='navbar-center flex items-center lg:space-x-4 space-x-2 z-50'>
        <div className='hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <NavLink
                className='transition text-md'
                to='/weather'>
                  Weather
              </NavLink>
            </li>
            <li>
              <NavLink 
                className='transition' 
                to='/huts'>
                  Huts
              </NavLink>
            </li>
            <li>
              <NavLink 
                className='transition'
                to='/tracks/region'>
                  Hikes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/reviews' 
                className='transition'>
                  Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/alerts' 
                className='transition'>
                  Alerts
              </NavLink>
            </li>
            <li className='pl-2'>
              <IfAuthenticated>
                <div className='flex flex-col items-center space-y-2'>
                  <button className=' text-black text-sm mr-2 hover:text-gray-400 hover:scale-105 transition-transform duration-200 hover:cursor-pointer' onClick={handleSignOut}>Sign out</button>
                  {user && <p className='text-sm text-black'>User: {user?.nickname}</p>}
                </div>
              </IfAuthenticated>
              <IfNotAuthenticated>
                <button  className='border-lg rounded-lg bg-[#4A5D5E] hover:bg-[#586b6c] text-sm px-2 py-1 text-white hover:scale-105 transition-transform duration-200 hover:cursor-pointer' onClick={handleSignIn}>Sign in</button>
              </IfNotAuthenticated>
            </li>
          </ul>
        </div>
        <label
          className='swap swap-rotate'
          aria-label='theme changer'
        >
          <input
            type='checkbox'
            className='theme-controller'
            onChange={(e) => changedTheme(e.target.checked ? 'dark' : 'light')}
          />
          <svg
            className='swap-off h-8 w-8 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
          </svg>
          <svg
            className='swap-on h-8 w-8 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
          </svg>
        </label>
      </div>
    </div>
  )
}


