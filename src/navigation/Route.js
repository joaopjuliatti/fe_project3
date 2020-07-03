/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'

import { Template } from '../components/Template'

export default function RouteWrapper(props) {
  const { component: Component, path, ...rest} = props
  console.log(`8uRADPdPak6weAB`)
  return (
    <>
      <Route
        {...rest}
        render={prop => (
          <>
            <Template>
              <Component {...prop} />
            </Template>
          </>
        )}
      />
    </>
  )
}

