import { createContext, useState, useEffect, ReactNode } from 'react';
interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  theme: string;
  changedTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export default function ThemeProvider({children}: ThemeProviderProps) {
  const [theme, setTheme] = useState('light')
  const [mounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const storedTheme = localStorage.getItem('theme') || 'light'
    setTheme(storedTheme)
  }, [])

  if (!mounted) return <p>Loading....</p>

  const changedTheme = (theme: string) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <ThemeContext.Provider value={{theme, changedTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}