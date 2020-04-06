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
  return <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

