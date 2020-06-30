/* eslint-disable no-unused-vars */
import React from 'react'
import { Redirect, Switch, Router } from 'react-router-dom'

import { ToastComponent } from '~/components/toast'
import Route from './Route'
import { routes } from './routes'



export const Navigation = () => {
  return (
    <Router>
      <Switch>
        {routes.map(item => (
          <Route
            key={item.key}
            exact={item.exact}
            path={item.path}
            // isPrivate={item.private}
            // isFirstScreen={item.isFirstScreen}
            component={item.component}
          />
        ))}
        <Redirect to="/404" exact />
      </Switch>
    </Router>
  )
}
