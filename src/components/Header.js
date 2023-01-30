import styled from 'styled-components';
import React from 'react';
import Cecilia from '../images/profile.png'
import GitHub from '../images/1m.png'
import LInkedIn from '../images/2m.png'
import BackgroundImage from '../images/pinksilk.png'

const Header = () => {
  return (
    <>
      <Background>
        <IconsContainer>
          <a
            href="https://github.com/Sneezan"
            target="_blank"
            rel="noreferrer">
            <img
              src={GitHub}
              alt="link to Sneezan GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/ceciliafranlund/"
            target="_blank"
            rel="noreferrer">
            <img
              src={LInkedIn}
              alt="link to Cecilias Linked In" />
          </a>
        </IconsContainer>
        <BackgroundImg src={BackgroundImage} />
        <Name>Cecilia Frånlund</Name>
        <Title>frontend developer</Title>
      </Background>
      <a
        href="https://www.linkedin.com/in/ceciliafranlund/"
        target="_blank"
        rel="noreferrer">
        <ProfileImage src={Cecilia} alt="cecilia" link />
      </a>
    </>
  );
};
export default Header;

const Background = styled.header`
  background-color: var(--rose);
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;

const BackgroundImg = styled.img`
  background-size: cover;
  @media (max-width: 455px) {
    height: 100%;
  }

`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1.5rem;
  position: absolute;
  top: 2.5rem;
  right: 4.5rem;
  & img {
    height: auto;
    width: 55px;
    &:hover{
  transition: ease-out .3s;
  scale: 1.2;
}}
  @media (max-width: 1200px) {
    right: 3rem;
  }
  @media (max-width: 650px) {
    right: 2rem;
  }
`;

const Title = styled.h1`
    position: absolute;
    width: 300px;
    top: 35%;
    left: 10%;
    color: var(--mineShaft);
    font-size: 3rem;
    line-height: 2.8rem;
    font-family: roboto;
    text-shadow: 0px 0px 1px black;
  @media (min-width: 900px) {
    font-size: 4.9rem;
    line-height: 3.9rem;
    left: 20%;
  } 
  
  @media (min-width: 2000px) {
    left: 27%;
  }

`;

const Name = styled.h3`
    font-weight: 700;
    position: absolute;
    top: 33%;
    left: 10%;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--warmWhite);
    text-shadow: 0px 0px 2px black;
    @media (min-width: 900px) {
    font-size: 1.5rem;
    line-height: 0;
    left: 20%;
  }    
  @media (min-width: 2000px) {
    left: 27%;
  }
`;

const ProfileImage = styled.img`
    position:absolute;
    width: 190px;
    margin: 50px;
    right: -20px;
    top: 230px;
    border-radius: 50%;
    border: 5px solid var(--vivaMagentaDark);

    @media (min-width: 770px) {
      right: 20px;
      &:hover {
      filter: blur(2px);
      border: 5px solid var(--rose);
    }
  }
  @media (min-width: 900px) {
      right: 10%;
      width: 230px;
  } 
   @media (min-width: 1200px) {
      right: 15%;
  }
  @media (min-width: 1600px) {
      right: 20%;
  }
 `;
