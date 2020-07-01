// import { NotFound } from '~/screens/not-found'

import { Login } from '../screens/login'
import { Home } from '../screens/home'
//animals-control
import { ListAnimals } from '../screens/animals-control/list-animals'


export const routes = [
  // {
  //   key: 0,
  //   path: '/404',
  //   component: NotFound,
  //   private: false,
  // },
  {
    key: 1,
    path: '/',
    exact: true,
    private: false,
    component: Login
  },
  {
    key: 2,
    path: '/home',
    exact: true,
    private: false,
    component: Home
  },
  {
    key: 3,
    path: '/animals-control/list-animals',
    exact: true,
    private: false,
    component: ListAnimals
  },
]
