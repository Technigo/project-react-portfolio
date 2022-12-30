import React from 'react'
import styled from 'styled-components/macro'
import { HeaderFirstHeading, HeaderSecondHeading, HeaderThirdHeading } from 'StyledComponents/HeadlineStyles'
import { SocialMediaContainer } from 'StyledComponents/SocialMediaContainer'
import BackgroundImage from '../Images/background1.jpg'
import ProfileImage from '../Images/jhansson.png'
import GitHubIcon from '../Images/github-header-icon.png'
import LinkedinIcon from '../Images/linkedin-header-icon.png'

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>
        <HeaderFirstHeading>PORTFOLIO: <Bold> JESSICA HANSSON</Bold></HeaderFirstHeading>
        <HeaderSecondHeading>frontend developer</HeaderSecondHeading>
        <HeaderThirdHeading> & passionate about sustainable development </HeaderThirdHeading>
      </HeaderText>
      <SoMeContainer>
        <a href="https://github.com/jesshansson">
          <img src={GitHubIcon} alt="GitHub Icon" />
        </a>
        <a href="https://www.linkedin.com/in/jesshansson/">
          <img src={LinkedinIcon} alt="LinkedIn icon" />
        </a>
      </SoMeContainer>
      <ProfilePic src={ProfileImage} alt="Jessica Hansson" />
    </HeaderWrapper>
  )
}

export const HeaderWrapper = styled.header` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    height: 400px;
    background-color: #483643; 
    background-repeat: no-repeat;
    background-size: cover; 
    background-image: url(${BackgroundImage});
    position:relative;

    @media (min-width: 668px) {
      height: 480px;
  }
`;

const HeaderText = styled.div`
    position: absolute;
    left: 24px;
    top: 100px; 
    font-family: 'Roboto';
    font-style: normal;
    letter-spacing: 0.04em;
    color: white;
    text-shadow: 2px 2px rgb(0, 0, 0);
    max-width: 300px;

    @media (min-width: 800px) {
      padding-left: 50px;
      max-width: 550px;
  }
`
const ProfilePic = styled.img`
  display: flex;
  justify-items: flex-end;
  position: absolute;
  right: 5vh;
  bottom: -4vh; 
  width: 130px; 
  height: 130px; 
  border-radius: 50%;
  border:solid 2px rgb(255, 255, 255); 

  @media (min-width: 668px) {
    right: 7vh; 
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1025px) {
    right: 17vh;
  }
`

const Bold = styled.span`
  font-weight: bold;
`

const SoMeContainer = styled(SocialMediaContainer)`
    @media (max-width: 750px) {
    position: absolute;
    width: 150px;
    right: 1vh;
    top: 3vh;
    
    img {
      &:hover {
        transform: scale(1.1);
    }
  }
}

  @media (min-width: 668px){
    position: absolute;
    right: 2vh;
    top: 4vh;

    img {  
      &:hover {
        transform: scale(1.1);
      }
    }
    a {
      width: 40%;
      margin: 5px;
    }
  }

  
  @media (min-width: 1025px) {
    top: 6vh;
  }
  `
