import React, { useState } from 'react'

import SingleProject from './SingleProject'

const slideArray = [1, 2, 3, 4, 5]

const Projects = () => {

  const [slideIndex, setSlideIndex] = useState(1)

  function handlePreviousClick() {
    let tempValue = slideIndex
    if (tempValue === 1) {
      setSlideIndex(5)
    } else {
      setSlideIndex(tempValue -= 1)
    }
  }

  function handleNextClick() {
    let tempValue = slideIndex
    if (tempValue === 5) {
      setSlideIndex(1)
    } else {
      setSlideIndex(tempValue += 1)
    }
  }

  return <section className="section" id="projects">
    <div className="container has-text-centered">
      <div className="title">
        Projects
      </div>
      <div className="slide-number-container">
        <div className="icon" onClick={handlePreviousClick}>
          <i className="fas fa-chevron-left"></i>
        </div>
        {slideArray.map((element, i) => {
          return <div key={i}>
            {slideIndex === element ? <p className="slide-number" id={i}>{element}</p> : <p id={i}>{element}</p>}
          </div>
        })}
        <div className="icon" onClick={handleNextClick}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <SingleProject slideIndex={slideIndex} />
    </div>
  </section>
}

export default Projects