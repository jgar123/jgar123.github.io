import React from 'react'

const Navbar = () => {
  return <nav className="navbar is-fixed-top is-transparent" id="nav-styling">    
    <a href="#home" className="navbar-item">
      <span className="icon">
        <i className="fas fa-home"></i>
      </span>
    </a>
    <a href="#about" className="navbar-item">
      About
    </a>
    <a href="#projects" className="navbar-item">
      Projects
    </a>
    <a href="#contact" className="navbar-item">
      Contact
    </a>
  </nav>
}

export default Navbar