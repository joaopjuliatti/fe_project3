import { useState } from 'react'
import { history } from '../../navigation/history'


export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true)

  return [isLoading, setIsLoading]
}

export const useScreenControl = setIsLoading => {
  const [activePage, setActivePage] = useState('')
  // go to next?
  // go to prev?
  // go to page
  const goToPage = async path => {
    setIsLoading(true)
    if (path) {
      setIsLoading(false)
      // history.push(`/${accessLevel}/${path}`)
      history.push(`/${path}`)
    }
    
  }

  return [goToPage, activePage, setActivePage]
}
