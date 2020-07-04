/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { TemplateContext } from './context'
import {  useScreenControl, useInfos, useModal, useFarmMenu } from './hooks'

export const TemplateProvider = props => {
  const [isLoading, setIsLoading] = useState(true)

  const [ showLogoutModal, handleLogoutModal ] = useModal()
  const [logout] = useInfos(handleLogoutModal)
  const [FarmId, handleFarmIdUpdate ] = useFarmMenu()
  
  const [goToPage, activePage, setActivePage] = useScreenControl(setIsLoading)

  const { children } = props

  const providerValue = {
    isLoading,
    setIsLoading,
    showLogoutModal,
    handleLogoutModal,  
    logout,
    goToPage,
    activePage,
    setActivePage,
    FarmId,
    handleFarmIdUpdate
  }

  return <TemplateContext.Provider value={providerValue}>{children}</TemplateContext.Provider>
}
