import React from 'react'
import ParticlesComponent from './ParticlesComponent'

const Home = () => {
  return <>
    <ParticlesComponent />
    <section className="hero" id="home">
      <div className="hero-body">
        <div className="container has-text-centered" id="home-title">
          <p className="title is-size-1">
            Jonny Garius
          </p>
          <p className="subtitle">Software Engineer | <span id="football">Footballer</span> | <span id="rugby">Rugby Enthusiast</span></p>
        </div>
      </div>
    </section>
  </>

}

export default Home
