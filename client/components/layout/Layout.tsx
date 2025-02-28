import { Outlet } from 'react-router-dom'
import ClientThemeWrapper from '../context/ClientThemeWrapper.tsx'
import ThemeProvider from '../context/ThemeContext'
import '../../styles/index.scss'
import Footer from './Footer.tsx'
import Nav from './NavBar.tsx'
import SideBar from './SideBar.tsx'

export default function Layout() {
  return (
    <ThemeProvider>
      <ClientThemeWrapper>
        <div className='flex flex-col min-h-screen'>
          <Nav />
          <div className='flex flex-1'>
            <SideBar />
            <div className='flex-1 p-4'>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </ClientThemeWrapper>
    </ThemeProvider>
  )
}
