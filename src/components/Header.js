import React from 'react'
import myPicture from 'images/my-picture-white.png'
import { HeaderContainer, HeaderText, IconsHeader, Profile } from './styled-components/HeaderStyles'

const Header = ({ lnIcon, gitHubIcon }) => {
  return (
    <header>
      <HeaderContainer>
        <IconsHeader>
          <a href="https://www.linkedin.com/in/antonella-cardozo-187562b7/" tabIndex="0" target="_blank" rel="noreferrer">
            <img
              src={lnIcon}
              alt="linkedin icon" />
          </a>
          <a href="https://github.com/Sailornina" tabIndex="0" target="_blank" rel="noreferrer">
            <img
              src={gitHubIcon}
              alt="github icon" />
          </a>
        </IconsHeader>
        <Profile src={myPicture} alt="author" />
        <HeaderText>
          <h5>Antonella Cardozo (She/Her)</h5>
          <h1>Software Developer</h1>
          <p>+ HR</p>
        </HeaderText>
      </HeaderContainer>
    </header>

  )
}

export default Header;