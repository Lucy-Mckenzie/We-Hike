import { Outlet } from 'react-router-dom'
import ClientThemeWrapper from '../context/ClientThemeWrapper.tsx'
import ThemeProvider from '../context/ThemeContext'
import '../../styles/index.scss'
import Footer from './Footer.tsx'
import Nav from './NavBar.tsx'

export default function Layout() {
  return (
    <ThemeProvider>
    <ClientThemeWrapper>
      <div>
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
