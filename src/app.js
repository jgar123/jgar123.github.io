import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './style.scss'

const App = () => (
  <h1>Hello world</h1>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

