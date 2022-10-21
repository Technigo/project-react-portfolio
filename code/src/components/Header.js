import React from 'react';
import styled from 'styled-components';
import heroImage from './public/Images/dunes_jeremy-bishop_L.jpg';
import heroLinkedin from './public/Icons/linkedin_icon.png';
import heroGithub from '../Icons/github_icon.png';
import heroStackOverflow from './public/Icons/stack_overflow_icon.png';
import profileImage from './public/Images/N_B_weather_small.jpg';

const LinkedInURL = 'https://www.linkedin.com/in/nina-berggren'
const GitHubURL = 'https://github.com/NinaBerggren'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <a href="https://www.linkedin.com/in/nina-berggren/" target="_blank" rel="noreferrer" aria-label="Go to Linked In page">
          <img src={heroLinkedin} alt="LinkedIn icon for the header" />
        </a>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src={heroGithub} alt="Github icon for the header" />
        </a>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img
            src={heroStackOverflow}
            alt="Stack Overflow icon for the header" />
        </a>
      </HeaderIcons>
      <HeaderTitle>
        <h3>Portfolio: Mrs Cakety Cakes</h3>
        <h1>Front-End</h1>
        <h1>Developer</h1>
      </HeaderTitle>
      <HeaderImage>
        <img src={profileImage} alt="Mrs Cakes" />
      </HeaderImage>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header`
  background-image: url(${heroImage});
  width: 100%;
  height: 400px;
  background-position: top center;
  background-size: cover;
  position: relative;
`;

export const HeaderIcons = styled.div`
  position: absolute;
  right: 10%;
  top: 8%;
  
  img{
    height: 50px;
    margin-right: 10px;
    }

  img:hover{
    filter: opacity(0.5);
  }

@media (min-width: 668px) and (max-width: 1023px){
    img{
        height: 65px
    }
}

@media (min-width: 1024px){
  right: 15%;
  top: 10%;

  img{
  height: 75px;  
  }
}  
}
`;

export const HeaderTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  color: black;
  line-height: 30px;

  h3 {
    font-size: 18px;
  }

  h1 {
    font-size: 25px;
    display: block;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    h3 {
      font-size: 25px;
    }

    h1 {
      font-size: 40px;
      display: block;
    }
  }

  @media (min-width: 1024px) {
    left: 15%;

    h3 {
      font-size: 30px;
    }

    h1 {
      font-size: 50px;
      display: block;
    }
  }
`;
export const HeaderImage = styled.div`
  img {
    object-fit: cover;
    object-position: top center;
    border-radius: 50%;
    border: 4px solid white;
    width: 170px;
    height: 170px;
    position: absolute;
    bottom: -10%;
    right: 10%;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    img {
      width: 230px;
      height: 230px;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 240px;
      height: 240px;
      bottom: -15%;
      right: 15%;
    }
  }
`;

