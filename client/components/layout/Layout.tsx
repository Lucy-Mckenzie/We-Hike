import { Outlet } from 'react-router-dom'
import ClientThemeWrapper from './context/ClientThemeWrapper'
import ThemeProvider from './context/ThemeContext'
import './globals.css'
import Footer from './Footer.tsx'
import Nav from './NavBar.tsx'

export default function Layout() {
  return (
      <div>
      <ThemeProvider>
      <ClientThemeWrapper>
        <Nav />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
      </ClientThemeWrapper>
      </ThemeProvider>
  )
}
