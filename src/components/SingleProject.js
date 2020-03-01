import React from 'react'

import placeholderImage from '../images/placeholder_screenshot.png'
import artistFlowImage from '../images/artist_flow_screenshot.png'
import newsmeImage from '../images/newsme_screenshot.png'
import snakeImage from '../images/snake_screenshot.png'

const SingleProject = ({ slideIndex }) => {
  return <div>
    {slideIndex === 1 ? 
      <div className="project-child">
        <img src={placeholderImage} alt="placeholder screenshot"/>
        <div className="project-child-description">
          <p className="subtitle">Placeholder</p>
          <div className="hozline"></div>
          <p>Created a full stack application with a ReactJS frontend and NodeJS/MongoDB backend. The platform allows users to share locations (restaurants, pubs, coffee shops etc.) with friends or share locations publicly with all users on the platform.</p>
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
              <a href="" target="_blank">
                <div className="icon is-large">
                  <i className="fas fa-external-link-alt fa-lg"></i>
                </div>
                <p className="is-size-7">go to project</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      : null
    }
    {slideIndex === 2 ? 
      <div className="project-child">
        <img src={artistFlowImage} alt="artist Flow screenshot"/>
        <div className="project-child-description">
          <p className="subtitle">artist_Flow</p>
          <div className="hozline"></div>
          <p>Built a full stack application using ReactJS and Django. Artist_Flow allows users to search for and find new artists in a user friendly way and store new artists in a profile.</p>
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
              <a href="" target="_blank">
                <div className="icon is-large">
                  <i className="fas fa-external-link-alt fa-lg"></i>
                </div>
                <p className="is-size-7">go to project</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      : null
    }
    {slideIndex === 3 ? 
      <div className="project-child">     
        <img src={newsmeImage} alt="news me screenshot"/>
        <div className="project-child-description">
          <p className="subtitle">NewsMe</p>
          <div className="hozline"></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem praesentium dignissimos earum nisi provident facilis. Eligendi eius aut dicta odit exercitationem architecto optio, a vero quaerat ipsam saepe! Consequatur, aliquid?</p>
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
              <a href="" target="_blank">
                <div className="icon is-large">
                  <i className="fas fa-external-link-alt fa-lg"></i>
                </div>
                <p className="is-size-7">go to project</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      : null
    }
    {slideIndex === 4 ? 
      <div className="project-child">
        <img src={snakeImage} alt="snake screenshot"/>
        <div className="project-child-description">
          <p className="subtitle">Snake!</p>
          <div className="hozline"></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem praesentium dignissimos earum nisi provident facilis. Eligendi eius aut dicta odit exercitationem architecto optio, a vero quaerat ipsam saepe! Consequatur, aliquid?</p>
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
              <a href="" target="_blank">
                <div className="icon is-large">
                  <i className="fas fa-external-link-alt fa-lg"></i>
                </div>
                <p className="is-size-7">go to project</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      : null
    }
  </div>
}


export default SingleProject