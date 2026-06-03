import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const smoothPages = ['/', '/about', '/gallery']

    if (smoothPages.includes(pathname)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

export default ScrollToTop