/* eslint-disable no-unused-vars */
import React from 'react';

const ForMore = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <section className="for-more">
      <h2>For more</h2>
      <div className="FMlogo-container">
        <a href="https://www.linkedin.com/in/elin-s-683a867a/" aria-label="Link to LinkedIn profile">
          <img src={linkedinLogo} className="logo dark-logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/ElinSegelov" aria-label="Link to Github profile">
          <img src={githubLogo} className="logo dark-logo" alt="Github logo" />
        </a>
        {/* <a href="https://stackoverflow.com/c/technigo/users/375" aria-label="Link to Stack Overflow profile">
          <img src={stackOverflowLogo} className="logo dark-logo" alt="Stack Overflow logo" />
        </a> */}
      </div>
    </section>
  )
}

export default ForMore;