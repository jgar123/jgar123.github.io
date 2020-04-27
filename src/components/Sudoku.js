import React from 'react'

import sudokuImage from '../images/sudoku-collage.png'

const Sudoku = () => (
  <div className="project-child">
    <img src={sudokuImage} />
    <div className="project-child-description">
      <p className="title is-family-sans-serif" id="sudoku-title">SUDOKU SOLVER</p>
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
)

export default Sudoku