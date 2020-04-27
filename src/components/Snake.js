import React from 'react'
import snakeImage from '../images/snake-collage.png'

const Snake = () => (
  <div className="project-child">
    <img src={snakeImage} alt="snake screenshot" />
    <div className="project-child-description">
      <p className="title" id="snake-title">SNAKE</p>
      <div className="hozline"></div>
      <p>A JavaScript implementation of the classic game snake.</p>
      <div className="project-child-skill">
        <div className="github-container">
          <a href="https://github.com/jgar123/project-1" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i className="skills-icon devicon-github-plain"></i>
            </div>
            <p className="is-size-7">github repo</p>
          </a>
        </div>
        <div className="project-link-container">
          <a href="https://jgar123.github.io/project-1" target="_blank" rel="noopener noreferrer">
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

export default Snake