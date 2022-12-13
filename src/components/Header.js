import React from 'react';
import styled from 'styled-components';
import { GITHUB_URL, LINKEDIN_URL, STACKOVERFLOW_URL } from 'utils/Urls';
import heroLinkedin from './assets/linkedin.png';
import heroGithub from './assets/github.png';
import heroStackOverflow from './assets/stackoverflow.png';
import profileImage from './assets/profile-pic.jpg';
import heroImage from './assets/header-img.jpg';

export const Header = () => {
  return (
    <HeaderContainer>

      {/* Icons and links in the header */}
      <HeaderIcons>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          <img src={heroLinkedin} alt="LinkedIn icon for the header" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
          <img src={heroGithub} alt="Github icon for the header" />
        </a>
        <a href={STACKOVERFLOW_URL} target="_blank" rel="noreferrer">
          <img
            src={heroStackOverflow}
            alt="Stack Overflow icon for the header" />
        </a>
      </HeaderIcons>

      {/* Title and name */}
      <HeaderTitle>
        <h3>Portfolio: Neah Rockstroh</h3>
        <h1>Front-End</h1>
        <h1>Developer</h1>
      </HeaderTitle>

      {/* profile pic */}
      <HeaderImage>
        <img src={profileImage} alt="Neah Rockstroh" />
      </HeaderImage>
    </HeaderContainer>
  );
};

/* background image for header */
export const HeaderContainer = styled.header`
  background-image: url(${heroImage});
  width: 100%;
  height: 400px;
  background-position: top center;
  background-size: cover;
  position: relative;
`;

/* icons and links */
export const HeaderIcons = styled.div`
  position: absolute;
  right: 10%;
  top: 8%;
  
  img{
    height: 50px;
    margin-right: 10px;
    filter: invert(1);
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

/* Title and name */
export const HeaderTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  color: whitesmoke;
  line-height: 30px;

  h3 {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1 {
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
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

/* profile picture */
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
