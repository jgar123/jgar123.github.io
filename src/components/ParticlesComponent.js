import React from 'react'
import Particles from 'react-particles-js'

const ParticlesComponent = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true
            }
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            out_mode: 'out'
          },
          line_linked: {
            enable: false
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onresize: {
              enable: true,
              density_auto: true,
              density_area: 400
            }
          },
          modes: {
            remove: {
              particles_nb: 10
            }
          }
        }
      }}
    />
  </div>
)

export default ParticlesComponent