/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { TemplateContext } from './context'
import {  useScreenControl } from './hooks'

export const TemplateProvider = props => {
  const [isLoading, setIsLoading] = useState(true)

  const [goToPage, activePage, setActivePage] = useScreenControl(setIsLoading)

  const { children } = props

  const providerValue = {
    isLoading,
    setIsLoading,
    goToPage,
    activePage,
    setActivePage
  }

  return <TemplateContext.Provider value={providerValue}>{children}</TemplateContext.Provider>
}
