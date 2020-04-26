import React from 'react'
import Skills from './Skills'

const About = () => {
  return <>
  <section className="section has-background-light" id="about">
    <div className="container has-text-centered">
      <p className="title has-text-grey-darker">About</p>
      <div className="columns is-centered">
        <div className="column has-text-left has-text-grey-darker is-size-6" id="separate">
          Hi there, welcome to my portfolio! I'm a London based Software Engineer, currently working as a Teaching Assistant for General Assembly on their Software Engineering Immersive course.
          <br />
          <br />
          My first job out of university saw me working as a Researcher at the Office for National Statistics. I used R and SAS for data-linkage projects linking hashed data both deterministically and probablistically with a fantastic team in Titchfield. I discovered that I loved building algorithms to perform tasks efficiently and in as few lines of code as possible. Not only this, I spent time outside of work researching new functions, packages and methods I could implement in my work.
          <br />
          <br />
          After my time at the ONS I spent a year in the tech recruitment space, speaking to Software Engineers regularly. It was here I really discovered what Software Engineering entailed, hearing about the fascinating projects they were working on and the problems they faced in their day to day job. Through all these conversations and my previous experiences of coding, it inspired me to make the leap and enroll into General Assembly's Software Engineering Immersive Course. Enjoying every moment, I graduated from the course in February 2020 and was asked to stay on as a Teaching Assistant.
        </div>
        <Skills />
      </div>
    </div>
  </section>
  </>
}

export default About