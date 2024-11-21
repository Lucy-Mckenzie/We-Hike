import { Outlet } from 'react-router-dom'

import Footer from './Footer.tsx'
import Nav from './NavBar.tsx'

export default function Layout() {
  return (
    <>
      <div>
        <Nav />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}
