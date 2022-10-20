import styled from 'styled-components';
import React from 'react';
import Cecilia from '../images/Cecilia.jpeg'
import GitHub from '../images/img_326384.png'

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
            href="https://github.com/Sneezan"
            target="_blank"
            rel="noreferrer">
            <img
              src={GitHub}
              alt="link to Sneezan GitHub" />
          </a>
        </IconsContainer>
        <Name>Cecilia Frånlund</Name>
        <Title>frontend developer</Title>
      </Background>
      <ProfileImage src={Cecilia} alt="cecilia" />
    </>
  );
};
export default Header;

const Background = styled.header`
  background-color: #a19595;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
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
  }
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
    color: white;
    font-size: 2.8rem;
    line-height: 2.4rem;
    font-family: roboto;
  
  @media (min-width: 900px) {
    font-size: 3.7rem;
    line-height: 2.9rem;
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
    color: red;
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
    border: 4px solid #444444;
    @media (min-width: 770px) {
      right: 20px;
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
