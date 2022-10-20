import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/irina-iriser-ztMuZyqEQpg-unsplash.jpg';
import heroLinkedin from '../assets/linkedin-icon.svg';
import heroGithub from '../assets/github-icon.svg';
import heroStackOverflow from '../assets/stackoverflow-icon.svg';
import profileImage from '../assets/profil-pic.jpg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcons>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src={heroLinkedin} alt="LinkedIn icon for the header" />
        </a>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src={heroGithub} alt="Github icon for the header" />
        </a>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src={heroStackOverflow} alt="Stack Overflow icon for the header" />
        </a>
      </HeaderIcons>
      <HeaderTitle>
        <h3>PORTFOLIO: LINDA NORBERG</h3>
        <h1>Frontend</h1>
        <h1>Developer</h1>
      </HeaderTitle>
      <HeaderImage>
        <img src={profileImage} alt="Portrait" />
      </HeaderImage>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-image: url(${heroImage});
  width: 100%;
  height: 45vh;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const HeaderIcons = styled.div`
  position: absolute;
  right: 5%;
  top: 10%;
  
  img{
    height: 3rem;
    margin-right: 1rem;    
    }

  img:hover{
    filter: opacity(0.5);
  }

  @media (min-width: 668px) and (max-width: 1023px){
      img{
          height: 5rem;
      }
  }

  @media (min-width: 1024px){
    right: 8%;
    top: 10%;

    img{
    height: 5rem;  
    }

  @media (min-width: 1024px){
    right: 20%;
    top: 10%;

    img{
    height: 5rem;  
    }
}  

`;

const HeaderTitle = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  color: whitesmoke;
  line-height: 30px;

  h3 {
    font-size: 1rem;
    font-weight: lighter;
  }

  h1 {
    font-size: 2rem;
    display: block;
    margin-bottom: 0.2rem;
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

  @media (min-width: 1400px) {
    left: 25%;

    h3 {
      font-size: 30px;
    }

    h1 {
      font-size: 50px;
      display: block;
    }
  }
`;
const HeaderImage = styled.div`
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
    dipslay: block;
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

  @media (min-width: 1400px) {
    img {
      width: 18rem;
      height: 18rem;
      bottom: -15%;
      right: 20%;
    }
  }
`;

