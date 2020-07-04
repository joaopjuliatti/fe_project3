import { useEffect } from 'react'

export const useLogin = setIsLoading => {
  useEffect(() => {
    setIsLoading(false)
  }, [])
}
