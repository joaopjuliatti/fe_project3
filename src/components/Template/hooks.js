import { useState } from 'react'
import { history } from '../../navigation/history'

import { showToast } from '../toast'

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true)

  return [isLoading, setIsLoading]
}

export const useModal = () => {
  const [showLogoutModal, SetShowLogoutModal] = useState(false)

  const handleLogoutModal = option => {
    SetShowLogoutModal(option)
  }

  return [ showLogoutModal, handleLogoutModal]
}


export const useInfos = handleLogoutModal => {

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/')
    handleLogoutModal(false)
  }

  return [logout]
}

export const useScreenControl = setIsLoading => {
  const [activePage, setActivePage] = useState('')

  const goToPage = async path => {
    setIsLoading(true)

    try {

      if (path) {
        setIsLoading(false)
        history.push(`/${path}`)
      }
    } catch (error) {
      showToast('Erro ao autenticar a URL, tente novamente ou contate a Joao')
    }
  }

  return [goToPage, activePage, setActivePage]
}
