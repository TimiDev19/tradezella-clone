import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const useDarkMode = () => {
  const [theme, setTheme] = useState<Theme | null>(null)

  // Apply theme to <html> tag
  useEffect(() => {
    if (theme === null) return

    const root = window.document.documentElement
    const opposite = theme === 'dark' ? 'light' : 'dark'

    root.classList.remove(opposite)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // Set theme on mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    const savedTheme = localStorage.getItem('theme') as Theme | null

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}

export default useDarkMode
