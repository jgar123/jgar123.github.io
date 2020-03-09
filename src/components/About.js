import React from 'react'

const About = () => {
  return <section className="section has-background-light" id="about">
    <div className="container has-text-centered">
      <p className="title has-text-grey-darker">About</p>
      <div className="columns is-centered">
        <div className="column has-text-left has-text-grey-darker is-size-6" id="separate">
          Hi there, welcome to my portfolio! I'm a London based Software Engineer, currently working as a Teaching Assistant for General Assembly on their Software Engineering Immersive course.
          <br />
          <br />
          I first came into contact with the development world in a short summer internship at Kyocera, stumbling into jQuery, HTML and CSS - creating small and very basic web pages on the company's intranet portal. With not much guidance on the matter and really a side project to my actual day to day job, my interest subsided as I didn't have the confidence to believe I could make a career out of it.
          <br />
          <br />
          My first job out of university saw me working as a Researcher at the Office for National Statistics. I used R and SAS for data-linkage projects linking hashed data both deterministically and probablistically in a fantastic team in Titchfield. I discovered I loved building algorithms to perform tasks efficiently and in as few lines of code as possible. Not only this, I spent time outside of work researching new functions, packages and methods I could implement in my work.
          <br />
          <br />
          After my time at the ONS I spent a year in the tech recruitment space, speaking to Software Engineers regularly. It was here I really discovered what Software Engineering entailed, hearing about the fascinating projects they were working on and the problems they faced in their day to day job. Through all these conversations and my previous experiences of coding it inspired me to make the leap and enroll into General Assembly's Software Engineering Immersive Course.
          <br />
          <br />
          I’ve enjoyed every moment of the course and have discovered a true hunger and passion for the discipline. Building games, CRUD apps and API’s using both React and Python. Whether it be building features from scratch or optimising, I am highly motivated to step into the developer world and make a difference!

        </div>
        <div className="column has-text-centered">
          <p className="subtitle has-text-grey-darker">Skills</p>
          <div className="columns is-centered">
            <div className="column">
              <div className="icon is-large">
                <i className="skills-icon devicon-javascript-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-python-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-react-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-mongodb-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-express-original"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-django-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-postgresql-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-nodejs-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-html5-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-css3-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-babel-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-git-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-github-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-heroku-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-mocha-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-sass-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon devicon-webpack-plain"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon fab fa-3x fa-slack"></i>
              </div>
              <div className="icon is-large">
                <i className="skills-icon fab fa-3x fa-r-project"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default About