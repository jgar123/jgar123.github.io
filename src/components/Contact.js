import React from 'react'

const Contact = () => {
  return <section className="section has-background-light" id="contact">
    <div className="container has-text-centered">
      <p className="title has-text-grey-darker">Contact Info</p>
      <div className="columns is-centered">
        <div className="column is-one-quarter">
          <a href="https://www.linkedin.com/in/jonny-garius/" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
            <p className="is-size-7">linkedin.com/in/jonny-garius/</p>
          </a>
        </div>
        <div className="column is-one-quarter">
          <a href="https://github.com/jgar123" target="_blank" rel="noopener noreferrer">
            <div className="icon is-large">
              <i className="skills-icon devicon-github-plain fa-2x"></i>
            </div>
            <p className="is-size-7">github.com/jgar123</p>
          </a>
        </div>
      </div>
    </div>
  </section>
}

export default Contact