import { NotFound } from '~/screens/not-found'

import { Login } from '~/screens/login'


export const routes = [
  {
    key: 0,
    path: '/404',
    component: NotFound,
    private: false,
  },
  {
    key: 1,
    path: '/',
    exact: true,
    private: false,
    component: Login
  },
]
