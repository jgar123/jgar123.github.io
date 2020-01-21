import React from 'react'

const About = () => {
  console.log(`About height: ${window.document.documentElement.scrollHeight}`)
  return <section className="section" id="about">
    <div className="container has-text-centered">
      <p className="title">About</p>
      <div className="columns is-centered">
        <div className="column has-text-left" id="separate">Hi! My name is Jonny and I'm a London based Software Engineer. Having previously worked as a tech recruiter and statistician, I gained a peek into coding and the industry opportunities software engineering could provide. Having previous experience in coding with R at the ONS I decided to pursue a career in Software Engineering. Graduating from General Assembly in Software Engineering, I’ve enjoyed every moment and have discovered a true hunger and passion for the discipline. Building games, CRUD apps and API’s using both React and Python. Whether it be building features from scratch or optimising, I am highly motivated to step into the developer world and make a difference!</div>
        <div className="column has-text-centered">
          <p className="subtitle">Skills</p>
          <div className="columns">
            <div className="column">
              <div className="icon is-large">
                <i className=" skills-icon devicon-javascript-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-python-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-react-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-mongodb-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-express-original"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-django-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-postgresql-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-nodejs-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-html5-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-css3-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-babel-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-git-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-github-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-heroku-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-mocha-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-sass-plain"></i>
              </div>
              <div className="icon is-large">
                <i className=" skills-icon devicon-webpack-plain"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default About