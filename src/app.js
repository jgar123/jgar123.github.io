import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

