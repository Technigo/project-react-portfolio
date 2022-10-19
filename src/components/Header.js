import React from 'react'
/* import styled from 'styled-components' */
import myPicture from 'images/my-picture.jpg'

/* const TextHeader = styled.div`
position: absolute;
color: black;
font-family: 'Cabin', sans-serif;
letter-spacing: 0.04em;
line-height: 50px;
` */

const Header = ({ lnIcon, gitHubIcon }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-icons">
          <a href="https://www.linkedin.com/in/antonella-cardozo-187562b7/" tabIndex="0" target="_blank" rel="noreferrer">
            <img
              className="header-icon"
              src={lnIcon}
              alt="linkedin icon" />
          </a>
          <a href="https://github.com/Sailornina" tabIndex="0" target="_blank" rel="noreferrer">
            <img
              className="header-icon"
              src={gitHubIcon}
              alt="github icon" />
          </a>
        </div>
        <img className="profile-img" src={myPicture} alt="author" />
        <div className="header-text-group">
          <h5 className="name">Antonella Cardozo</h5>
          <h1 className="career">Software Developer</h1>
          <p className="ex-career">+ HR</p>
        </div>
      </div>
    </header>

  )
}

export default Header;