import React from 'react'
import newsmeImage from '../images/newsme-collage.png'

const NewsMe = () => (
  <div className="project-child">
    <img src={newsmeImage} alt="news me screenshot" />
    <div className="project-child-description">
      <p className="title" id="newsme-title">NewsMe</p>
      <div className="hozline"></div>
      <p>NewsMe is a frontend application built in a pair coding hackathon. It utilises the News API and openWether API to provide users with the most popular news stories via a keyword search. It also allows users to grab a snapshot of the weather or generate a 5 day forecast.</p>
      <div className="project-child-skill">
        <div className="github-container">
          <a href="https://github.com/jgar123/project-2" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i className="skills-icon devicon-github-plain"></i>
            </div>
            <p className="is-size-7">github repo</p>
          </a>
        </div>
        <div className="project-link-container">
          <a href="https://jgar123.github.io/project-2/" target="_blank" rel="noopener noreferrer">
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

export default NewsMe