import React from 'react'
import ReactDOM from 'react-dom'
import { Navigation } from './navigation'

import { TemplateProvider } from './components/Template/provider'

console.log = () => {}
console.error = () => {}
console.warn = () => {}

ReactDOM.render(
  <TemplateProvider>
    <Navigation />
  </TemplateProvider>,
  document.getElementById('root')
)

