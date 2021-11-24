import React from 'react'
import Skills from './Skills'

const About = () => {
  return <>
  <section className="section has-background-light" id="about">
    <div className="container has-text-centered">
      <p className="title has-text-grey-darker">About</p>
      <div className="columns is-centered">
        <div className="column has-text-left has-text-grey-darker is-size-6" id="separate">
          Hi there, welcome to my portfolio! I'm a Software Engineer working for a London based consultancy where I predominantly focus of backend development.
          <br />
          <br />
          My first job out of university saw me working as a Researcher at the Office for National Statistics. I used R and SAS for data-linkage projects linking hashed data both deterministically and probablistically. I discovered that I loved building algorithms to perform tasks efficiently and in as few lines of code as possible. 
          <br />
          <br />
          I have been in the programming space for several years and have shipped multiple products that are now live and used by thousands of users. 
        </div>
        <Skills />
      </div>
    </div>
  </section>
  </>
}

export default About