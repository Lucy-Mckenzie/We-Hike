import { ReactNode, useContext } from 'react'
import { ThemeContext } from './ThemeContext'

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ClientThemeWrapper({children}: ThemeProviderProps) {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('ClientThemeWrapper must be used within a ThemeProvider')
  }

  const { theme } = context;

  return <div data-theme={theme}>{children}</div>

}