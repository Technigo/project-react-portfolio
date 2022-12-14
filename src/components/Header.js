import React from 'react';
import styled from 'styled-components';

import heroImage from 'assets/heroImage.jpg';
import heroLinkedin from 'assets/linkedin-icon.svg';
import heroGithub from 'assets/github-icon.svg';
/* import heroStackOverflow from 'assets/stackoverflow-icon.svg'; */
import profileImage from 'assets/profileImage-4.jpg';
import { GITHUB_URL, LINKEDIN_URL /* , STACKOVERFLOW_URL */ } from 'utils/Urls';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          <img src={heroLinkedin} alt="LinkedIn icon for the header" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
          <img src={heroGithub} alt="Github icon for the header" />
        </a>
        {/* <a href={STACKOVERFLOW_URL} target="_blank" rel="noreferrer">
          <img
            src={heroStackOverflow}
            alt="Stack Overflow icon for the header" />
  </a> */}
      </HeaderIcons>
      <HeaderTitle>
        <h3><span className="name">PORTFOLIO:</span> SOFIA ANDERSSON</h3>
        <h1>frontend developer</h1>
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
  height: 450px;
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
`;

export const HeaderTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  color: white;
  line-height: 30px;

  h3 {
    font-size: 18px;
  }

  h1 {
    font-size: 30px;
    line-height: 40px;
    display: block;
  }

  .name {
    font-weight: 400;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    h3 {
      font-size: 25px;
    }

    h1 {
      font-size: 50px;
      display: block;
      margin: 2%;
    }
  }

  @media (min-width: 1024px) {
    left: 15%;

    h3 {
      font-size: 35px;
    }

    h1 {
      font-size: 60px;
      display: block;
    }
  }
`;
export const HeaderImage = styled.div`
  img {
    object-fit: cover;
    object-position: top center;
    border-radius: 50%;
    border:3px solid white;
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

