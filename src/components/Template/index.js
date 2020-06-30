/* eslint-disable react/prop-types */
import React, { useContext } from 'react'

import { Loading } from '../Loading'
import { View } from './styles'
import { TemplateContext } from './context'

export const Template = props => {
  const {  children } = props
  const { isLoading } = useContext(TemplateContext) // activeScreen,

  return (
    <>
      {isLoading && <Loading />}
      <View>{children}</View>
    </>
  )
}
