import { useEffect } from 'react'

export const useHome = (setIsLoading, goToPage, setActivePage) => {

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const handlePage = (path) => {
    setActivePage(path)
    goToPage(path)
  }

  return [ handlePage]
}
