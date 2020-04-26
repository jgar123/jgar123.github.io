import React from 'react'

import artistFlowImage from '../images/artist_flow_screenshot.png'

const ArtistFlow = () => (
  <div className="project-child">
    <img src={artistFlowImage} alt="artist Flow screenshot" />
    <div className="project-child-description">
      <p className="subtitle">artist_Flow</p>
      <div className="hozline"></div>
      <p>Built a full stack application using ReactJS and Django in a team of 3 over a period of a week. Artist_Flow allows users to search for and find new artists in a user friendly way and store favourited artists.</p>
      <div className="project-child-skill">
        <div className="github-container">
          <a href="https://github.com/jgar123/artist_Flow" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i className="skills-icon devicon-github-plain"></i>
            </div>
            <p className="is-size-7">github repo</p>
          </a>
        </div>
        <div className="project-link-container">
          <a href="https://artist-flow-ga.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
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

export default ArtistFlow