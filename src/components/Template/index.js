/* eslint-disable react/prop-types */
import React, { useContext } from 'react'

import { Loading } from '../Loading'
import { View } from './styles'
import { TemplateContext } from './context'
import { LogoutModal } from '../LogoutModal'

export const Template = props => {
  const {  children } = props
  const { isLoading, showLogoutModal, handleLogoutModal, logout } = useContext(TemplateContext) // activeScreen,
  return (
    <>
      {showLogoutModal && <LogoutModal handleModal={handleLogoutModal} logout={logout} />}
      { isLoading && <Loading />}
      <View>{children}</View>
    </>
  )
}
