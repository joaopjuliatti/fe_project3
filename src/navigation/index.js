/* eslint-disable no-unused-vars */
import React from 'react'
import { Redirect, Switch, Router } from 'react-router-dom'

import { ToastComponent } from '../components/toast'
import Route from './Route'
import { routes } from './routes'

import { history } from './history'

export const Navigation = () => {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(item => {
          console.log(item.path)
          return(
          <Route
            key={item.key}
            exact
            path={item.path}
            component={item.component}
          />
        )})}
        <Redirect to="/404" exact />
      </Switch>
      <ToastComponent />
    </Router>
  )
}
