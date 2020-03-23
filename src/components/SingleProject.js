import React from 'react'

import placeholderImage from '../images/placeholder_screenshot.png'
import artistFlowImage from '../images/artist_flow_screenshot.png'
import newsmeImage from '../images/newsme_screenshot.png'
import snakeImage from '../images/snake_screenshot.png'
// import sudokuImage from '../images/sudoku-solver_screenshot.png'
import sudoku1 from '../images/empty-sudoku.png'
import sudoku2 from '../images/unsolved-sudoku.png'
import sudoku3 from '../images/solved-sudoku.png'

// Decided to have this as a large component due to the differing number of images used between each project.

const SingleProject = ({ slideIndex }) => {
  return <div>
    {slideIndex === 1 ?
      <div className="project-child">
        <img src={placeholderImage} alt="placeholder screenshot" />
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
      : null
    }
    {slideIndex === 2 ?
      <div className="project-child">
        <figure className="sudoku-image-container">
          <img src={sudoku1} alt="sudoku screenshot" />
          <img src={sudoku2} alt="sudoku screenshot" />
          <img src={sudoku3} alt="sudoku screenshot" />
        </figure>
        <div className="project-child-description" id="sudoku-description">
          <p className="subtitle">Sudoku Solver</p>
          <div className="hozline"></div>
          <p>Made a simple JavaScript, HTML and CSS sudoku solver that utilises 2 methods of puzzle solving for sudoku puzzles. This project was made with a mobile first approach.</p>
          <div className="project-child-skill">
            <div className="github-container">
              <a href="https://github.com/jgar123/sudoku-solver" target="_blank" rel="noopener noreferrer">
                <div className="icon is-large">
                  <i className="skills-icon devicon-github-plain"></i>
                </div>
                <p className="is-size-7">github repo</p>
              </a>
            </div>
            <div className="project-link-container">
              <a href="https://jgar123.github.io/sudoku-solver/" target="_blank" rel="noopener noreferrer">
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
      : null
    }
    {slideIndex === 4 ?
      <div className="project-child">
        <img src={newsmeImage} alt="news me screenshot" />
        <div className="project-child-description">
          <p className="subtitle">NewsMe</p>
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
      : null
    }
    {slideIndex === 5 ?
      <div className="project-child">
        <img src={snakeImage} alt="snake screenshot" />
        <div className="project-child-description">
          <p className="subtitle">Snake!</p>
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
      : null
    }
  </div>
}


export default SingleProject