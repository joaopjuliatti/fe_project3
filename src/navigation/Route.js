/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'

export default function RouteWrapper(props) {
  const { component: Component, isTemplate, ...rest } = props

  return (
    <>
      <Route
        {...rest}
        render={prop => (
        <Component {...prop} />
        )}
      />
    </>
  )
}
