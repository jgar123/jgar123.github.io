import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import placeholderImage from '../images/placeholder_screenshot.png'
import artistFlowImage from '../images/artist_flow_screenshot.png'
import newsmeImage from '../images/newsme_screenshot.png'
import snakeImage from '../images/snake_screenshot.png'

const Projects = () => {

  return <section className="section" id="projects">
    <div className="container has-text-centered">
      <p className="title">Projects</p>
      <div>
        <p className="subtitle">Placeholder</p>
        <img src={placeholderImage} alt="placeholder screenshot"/>
      </div>
      <div>
        <p className="subtitle">artist_Flow</p>
        <img src={artistFlowImage} alt="placeholder screenshot"/>
      </div>
      <div>     
        <p className="subtitle">NewsMe</p>
        <img src={newsmeImage} alt="placeholder screenshot"/>
      </div>
      <div>
        <p className="subtitle">Snake!</p>
        <img src={snakeImage} alt="placeholder screenshot"/>
      </div>
    </div>
  </section>
}

export default Projects