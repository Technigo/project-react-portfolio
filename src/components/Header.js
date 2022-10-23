import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/headerhero.jpg';
import heroLinkedin from '../assets/icons/linkedinwhite.svg';
import heroGithub from '../assets/icons/githubwhite.svg';
import heroStackOverflow from '../assets/icons/stackwhite.svg';
import profileImage from '../assets/Linneaprofil.JPG';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <a href="https://www.linkedin.com/in/linn%C3%A9a-wahlstr%C3%B6m-018715253/" target="_blank" rel="noreferrer">
          <img src={heroLinkedin} alt="LinkedIn icon for the header" />
        </a>
        <a href="https://github.com/LinneaWa" target="_blank" rel="noreferrer">
          <img src={heroGithub} alt="Github icon for the header" />
        </a>
        <a href="https://stackoverflow.com/c/technigo/users/400" target="_blank" rel="noreferrer">
          <img
            src={heroStackOverflow}
            alt="Stack Overflow icon for the header" />
        </a>
      </HeaderIcons>
      <HeaderTitle>
        <p>Portfolio: <b>Linnéa Wahlström</b> </p>
        <h3>Front-End</h3>
        <h3>Developer</h3>
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
  height: 500px;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
`;

export const HeaderIcons = styled.div`
  position: absolute;
  right: 10%;
  top: 8%;
  background-color: #0000002c;
  border-radius: 25px;
  
  img {  height: 50px;
         margin: 5px; }

  img:hover { filter: opacity(0.5); }

@media (min-width: 668px) and (max-width: 1023px){
    img{ height: 65px }
}

@media (min-width: 1024px){
  right: 15%;
  top: 10%;
  img { height: 75px; }
}  
`;

export const HeaderTitle = styled.div`
  position: absolute;
  font-family: 'Montserrat', sans-serif;
  top: 30%;
  left: 10%;
  color: black;
  padding: 10px;
  line-height: 30px;
  background-color: #00000040;
  border-radius: 20px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    padding-left: 10px;
    padding-right: 10px;
    margin: 5px;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 130%;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    padding-left: 10px;
    display: inline;
  }

  @media (min-width: 668px) {
    p {
      font-size: 21px;
    }

    h3 {
      font-size: 30px;
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
      bottom: -10%;
      right: 15%;
    }
  }
`;