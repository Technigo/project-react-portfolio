import React from 'react';
// import styled from 'styled-components';
import profilePic from '../images/N_B_weather_small.jpg';
// import linkedInIcon from '../icons/linkedin.png';
// import gitHubIcon from '../icons/github.png';

// import { HeaderContainer, HeaderText, ProfileImage } from './headerStyle';
import { HeaderContainer, HeaderIcons, HeaderText, ProfileImage } from './headerStyle';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <a href="https://www.linkedin.com/in/nina-berggren" target="_blank" rel="noreferrer" aria-label="Go to Linked In page">
          <i className="fab fa-linkedin-in" alt="LinkedIn icon" />
        </a>
        <a href="https://github.com/NinaBerggren" target="_blank" rel="noreferrer">
          <i className="fab fa-github" alt="GitHub icon" />
        </a>
      </HeaderIcons>
      <HeaderText>
        <h4>PORTFOLIO: NINA BERGGREN</h4>
        <h1>frontend <br /> developer </h1>
        <h3> + problem solver &amp; <br />
          {/* indent? */}
          structured &quot;doer&quot;
        </h3>
      </HeaderText>
      <ProfileImage src={profilePic} alt="Profile image" />
    </HeaderContainer>
  );
};

