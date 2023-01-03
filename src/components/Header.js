import React from 'react';
import styled from 'styled-components/macro';
import heroImage from '../assets/irina-iriser-ztMuZyqEQpg-unsplash.jpg';
import heroLinkedin from '../assets/linkedin-icon.svg';
import heroGithub from '../assets/github-icon.svg';
import profileImage from '../assets/profil-pic.jpg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderIcons>
          <a href="https://www.linkedin.com/in/linda-norberg-0780a296/" target="_blank" rel="noreferrer">
            <img src={heroLinkedin} alt="LinkedIn icon for the header" />
          </a>
          <a href="https://github.com/lindanorberg" target="_blank" rel="noreferrer">
            <img src={heroGithub} alt="Github icon for the header" />
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
      </HeaderWrapper>
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

const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto; 
  position: relative;

  @media (min-width: 668px) {
      width: 70%;
  }

  @media (min-width: 1350px) {
      width: 55%;
  }
`;

const HeaderIcons = styled.div`
  position: absolute;
  right: 0;
  top: 5vh;
  display: flex;
  gap: 10px;
  
  img{
    height: 3rem;   
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
    img{
    height: 5rem;  
    }

  @media (min-width: 1400px){
    img{
    height: 5rem;  
    }
}  

`;

const HeaderTitle = styled.div`
  position: relative;
  top: 18vh;
  left: 0;
  color: whitesmoke;
  line-height: 30px;
  font-family: 'Roboto', sans-serif;

  h3 {
    font-size: 1rem;
    font-weight: lighter;
  }

  h1 {
    font-size: 2rem;
    display: block;
    margin-top: 0.75rem;
  }

  @media (min-width: 668px) and (max-width: 1023px) {
    h3 {
      font-size: 25px;
    }

    h1 {
      font-size: 40px;
      display: block;
      margin-top: 1rem;
    }
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 30px;
    }

    h1 {
      font-size: 50px;
      display: block;
      margin-top: 2rem;
    }
  }

  @media (min-width: 1400px) {
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
    bottom: -35vh;
    right: 0;
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
    }
  }

  @media (min-width: 1400px) {
    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

