import React from 'react'
import placeholderDesktop from '../images/placeholder_screenshot.png'

const Placeholder = () => (
  <div className="project-child">
    <img src={placeholderDesktop} alt="placeholder screenshot" />
    <div className="project-child-description">
      <p className="subtitle">Placeholder</p>
      <div className="hozline"></div>
      <p>Created a full stack application with a ReactJS frontend and NodeJS/MongoDB backend. The platform allows users to share locations (restaurants, pubs, coffee shops etc.) with friends or share locations publicly with all users on the platform (hence the name placeholder!).</p>
      <div className="project-child-skill">
        <div className="github-container">
          <a href="https://github.com/jgar123/placeholder" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i className="skills-icon devicon-github-plain"></i>
            </div>
            <p className="is-size-7">github repo</p>
          </a>
        </div>
        <div className="project-link-container">
          <a href="http://placeholder-ga.herokuapp.com/" target="_blank" rel="noopener noreferrer">
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

export default Placeholder