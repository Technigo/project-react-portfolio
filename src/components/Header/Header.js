/* eslint-disable linebreak-style */
import React from 'react'
import { HeaderSocialBar } from 'components/SocialBars/SocialBar.styles'
import { StyledHeader, HeaderText, ProfilePic } from './Header.styles.js';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderSocialBar>
        <a href="https://www.linkedin.com/in/sofierydmark/" role="button" aria-pressed="false" aria-label="linkedin-profile" target="_blank" rel="noreferrer">
          <img src="images/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://github.com/SofieRydmark" role="button" aria-pressed="false" aria-label="github-profile" target="_blank" rel="noreferrer">
          <img src="images/github.svg" alt="github" />
        </a>
        <a href="https://stackoverflow.com/c/technigo/users/394/" role="button" aria-pressed="false" aria-label="stackOverflow-profile" target="_blank" rel="noreferrer">
          <img src="images/stackOverflow.svg" alt="stackOverflow" />
        </a>
      </HeaderSocialBar>

      <HeaderText>
        <span style={{ width: 'max-content' }}>PORTFOLIO:<span style={{ fontWeight: '700' }}> SOFIE RYDMARK</span></span>
        <span style={{ fontWeight: '700', fontSize: '3rem', letterSpacing: '0.04rem' }}>frontend developer</span>
        <span style={{ fontWeight: '400', fontSize: '1.6rem', letterSpacing: '0.04rem' }}>with media buying experience</span>
      </HeaderText>

      <ProfilePic src="images/IMG_9230.jpg" alt="profile-pic" />
    </StyledHeader>
  )
}

export default Header;