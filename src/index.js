import React from 'react'
import ReactDOM from 'react-dom'
import { Navigation } from './navigation'

console.error = () => {}
console.warn = () => {}

ReactDOM.render(
  <Navigation />,
  document.getElementById('root')
)

