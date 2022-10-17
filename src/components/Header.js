import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <div className="header-links">
        <a href="www.linkedin.com/in/viktor-svensson-9a55891b2"><img src="./images/LinkedIn-header.png" alt="LinkedIn" /></a>
        <a href="https://github.com/ViktorSvenssonN"><img src="./images/GitHub-header.png" alt="Github" /></a>
        <a href="https://stackoverflow.com/users/apps/19384384"><img src="./images/StackOverflow-header.png" alt="Stack Overflow" /></a>
      </div>
      <div className="header-aboutme">
        <h3><span className="portfolio-text">Portofolio:</span> Viktor Svensson</h3>
        <h1>front-end</h1>
        <h1>developer</h1>
        <h2>+ Department manager</h2>
      </div>

      <div className="header-selfie" />
    </div>
  )
}

export default Header;