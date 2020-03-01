import React, { useState } from 'react'

import SingleProject from './SingleProject'

const slideArray = [1, 2, 3, 4]

const Projects = () => {

  const [slideIndex, setSlideIndex] = useState(1)

  function handlePreviousClick() {
    let tempValue = slideIndex
    if (tempValue === 1) {
      setSlideIndex(4)
    } else {
      setSlideIndex(tempValue -= 1)
    }
  }

  function handleNextClick() {
    let tempValue = slideIndex
    if (tempValue === 4) {
      setSlideIndex(1)
    } else {
      setSlideIndex(tempValue += 1)
    }
  }

  return <section className="section" id="projects">
    <div className="container has-text-centered">
      <div className="title">
        <span className="previous" onClick={handlePreviousClick}>previous</span>
        Projects
        <span className="next" onClick={handleNextClick}>next</span>
      </div>
      <div className="slide-number-container">
        {slideArray.map((element, i) => {
          return <div key={i}>
            {slideIndex === element ? <p className="slide-number" id={i}>{element}</p> : <p id={i}>{element}</p>}
          </div>
        })}
      </div>
      <SingleProject slideIndex={slideIndex} />
    </div>
  </section>
}

export default Projects