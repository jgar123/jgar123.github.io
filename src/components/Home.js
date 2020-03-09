import React from 'react'
import portfolioImage from '../images/portfolio-gif.gif'

const style = {
  height: '100vh',
  width: '100vw',
  margin: 0,
  padding: 0,
  backgroundImage: `url(${portfolioImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

const Home = () => {
  return <section className="hero is-fullheight" id="home">
    <div className="hero-body">
      <div className="container has-text-centered" id="home-title">
        <p className="title is-size-1">
          Jonny Garius
        </p>
        <p className="subtitle">Software Engineer | <span id="football">Footballer</span> | <span id="rugby">Rugby...er</span></p>
      </div>
    </div>
  </section>
}

export default Home
