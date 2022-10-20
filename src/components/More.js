import React from 'react';

const More = () => {
  return (<section className="section more">
    <h2>For More</h2>
    <div className="big-social-media-links">

      <div className="logo">
        <a
          href="https://www.linkedin.com/in/miadahlgren/"
          target="_blank"
          rel="noreferrer">
          <img alt="LinkedIn" src="./icons/linkedin.svg" />
        </a>
      </div>

      <div className="logo">
        <a href="https://github.com/miadahlgren" target="_blank" rel="noreferrer">
          <img alt="Github" src="./icons/github.svg" />
        </a>
      </div>

      <div className="logo">
        <a
          href="https://stackoverflow.com/users/19384439/"
          target="_blank"
          rel="noreferrer">
          <img className="stack" alt="Stackoverflow" src="./icons/stack.svg" />
        </a>
      </div>
    </div></section>)
}

export default More