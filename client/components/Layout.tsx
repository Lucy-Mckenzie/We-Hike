import { Outlet } from 'react-router-dom'

import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Nav from './NavBar.tsx'

export default function Layout() {
  return (
    <>
      <div id="page-container">
        <Nav />
        <div id="content-wrap">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}