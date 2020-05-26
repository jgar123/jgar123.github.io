import React from 'react'
import pacmanScreenshot from '../images/pacman-screenshot.png'

const Pacman = () => (
  <div className="project-child">
    <img src={pacmanScreenshot} alt="snake screenshot" />
    <div className="project-child-description">
      <p className="title">PAC-MAN</p>
      <div className="hozline"></div>
      <p>A simple version of the classic game Pac-Man utilising the Breadth-First-Search algorithm. This was my first project implementing a pathfinding algorithm to allow ghosts to move intelligently towards Pac-Man. The main aim was to practice pathfinding algorithms hence the lack of styling! (readme and more styling coming soon...)</p>
      <div className="project-child-skill">
        <div className="github-container">
          <a href="https://github.com/jgar123/BFS-Pacman" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i className="skills-icon devicon-github-plain"></i>
            </div>
            <p className="is-size-7">github repo</p>
          </a>
        </div>
        <div className="project-link-container">
          <a href="https://jgar123.github.io/BFS-Pacman" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i className="fas fa-external-link-alt fa-lg"></i>
            </div>
            <p className="is-size-7">go to project</p>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Pacman