/* eslint-disable linebreak-style */
import React from 'react'
import { StyledHeader, HeaderText, ProfilePic, HeaderSocialBar } from './Header.styles.js';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderSocialBar>
        <a href="https://stackoverflow.com/c/technigo/users/394/" title="stackOverflow" role="button" aria-pressed="false" aria-label="stackOverflow-profile" target="_blank" rel="noreferrer"><i className="fa fa-stack-overflow" /></a>
        <a href="https://www.linkedin.com/in/sofierydmark/" title="LinkedIn" role="button" aria-pressed="false" aria-label="linkedin-profile" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a>
        <a href="https://github.com/SofieRydmark" title="github" role="button" aria-pressed="false" aria-label="github-profile" rel="noreferrer" target="_blank"><i className="fa fa-github" /></a>
      </HeaderSocialBar>

      <HeaderText>
        <span style={{ width: 'max-content' }}>PORTFOLIO:<span style={{ fontWeight: '700' }}> SOFIE RYDMARK</span></span>
        <span style={{ fontWeight: '400', fontSize: '3rem', fontFamily: "'Yeseva One', cursive" }}>Frontend Developer</span>
        <span style={{ fontWeight: '400', fontSize: '1.6rem', letterSpacing: '0.04rem' }}>with media buying experience</span>
      </HeaderText>

      <ProfilePic src="images/IMG_9230.jpg" alt="profile-pic" />
    </StyledHeader>
  )
}

export default Header;
