import React from 'react'
import ReactDOM from 'react-dom'
import { Navigation } from './navigation'

import './config'
import './style.css'

// dev mode #coffe
// console.log = () => {}

console.error = () => {}
console.warn = () => {}

ReactDOM.render(
  <Navigation />,
  document.getElementById('root')
)

