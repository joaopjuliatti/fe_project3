const { REACT_APP_API_ENV } = process.env

const URLS = {
  production: 'https://manager-3-brothers.herokuapp.com/',
  remote_development: 'https://manager-3-brothers.herokuapp.com/',
  local_development: 'http://localhost:5000'
}

let _ROOT_URL

switch (REACT_APP_API_ENV) {
  case 'production':
    console.log('[production] -> server')
    _ROOT_URL = URLS.production
    break
  case 'development':
    console.log('[development] -> server')
    _ROOT_URL = URLS.remote_development
    break
  default:
    console.log('[localhost] -> server')
    _ROOT_URL = URLS.local_development
    break
}

export const ERRORS = {
  default: 'Ops, ocorreu algum erro '
}

export const ROOT_URL = _ROOT_URL
