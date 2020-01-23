import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

