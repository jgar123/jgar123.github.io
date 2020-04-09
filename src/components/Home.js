import React from 'react'
import ParticlesBg from 'particles-bg'
// import portfolioImage from '../images/portfolio-gif.gif'

const Home = () => {
  let config = {
    num: [4, 7],
    rps: 0.7,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [.1, 2],
    position: 'all',
    color: ['#ffffff'],
    cross: 'dead',
    random: 10,
    g: 1
  }

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath()
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        )
        ctx.fillStyle = particle.color
        ctx.fill()
        ctx.closePath()
      }
    })
  }
  return <section className="hero" id="home">
    <div className="hero-body">
      <div className="container has-text-centered" id="home-title">
        <p className="title is-size-1">
          Jonny Garius
        </p>
        <p className="subtitle">Software Engineer | <span id="football">Footballer</span> | <span id="rugby">Rugby Enthusiast</span></p>
      </div>
    </div>
    <ParticlesBg type="custom" config={config} bg={true} />
  </section>

}

export default Home
