// import { NotFound } from '~/screens/not-found'

import { Login } from '../screens/login'
import { Home } from '../screens/home'
//animals-control
import { ListAnimals } from '../screens/animals-control/list-animals'
import { CashFlow } from '../screens/cash-flow'


export const routes = [
  // {
  //   key: 0,
  //   path: '/404',
  //   component: NotFound,
  //   private: false,
  // },
  {
    key: 0,
    path: '/',
    exact: true,
    component: Login
  },
  {
    key: 1,
    path: '/home',
    exact: true,
    component: Home
  },
  {
    key: 2,
    path: '/animals-control/list-animals',
    exact: true,
    component: ListAnimals
  },
  {
    key: 3,
    path: '/cash-flow',
    exact: true,
    component: CashFlow
  }
]
