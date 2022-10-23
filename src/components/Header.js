import React from 'react'
import styled from 'styled-components'
import { HeaderFirstHeading, HeaderSecondHeading, HeaderThirdHeading } from 'StyledComponents/HeadlineStyles'
import { SocialMediaContainer } from 'StyledComponents/SocialMediaContainer'
import BackgroundImage from '../Images/background1.jpg'
import ProfileImage from '../Images/jhansson.png'
import GitHubIcon from '../Images/github-header-icon.png'
import LinkedinIcon from '../Images/linkedin-header-icon.png'
import StackIcon from '../Images/stack-header-icon.png'

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
        <a href="https://stackoverflow.com/users/19466381/jessica">
          <img src={StackIcon} alt="StackOverflow icon" />
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
    height: 520px;
    background-color: #483643; 
    background-repeat: no-repeat;
    background-size: cover; 
    background-image: url(${BackgroundImage});
    position:relative;

    @media (min-width: 668px) {
      height: 500px;
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

    @media (min-width: 668px) {
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
  width: 160px; 
  height: 160px; 
  border-radius: 50%;
  border:solid 2px rgb(255, 255, 255); 

  @media (min-width: 668px) {
    right: 7vh; 
    width: 220px;
    height: 220px;
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
    width: 200px;
    right: 1vh;
    top: 4vh;
  img {
    width:80%;
   
    &:hover {
     transform: scale(1.1);

    }
  }
}

  @media (min-width: 668px){
    position: absolute;
    right: 2vh;
    top: 5vh;

    img {
      width: 80%;
      
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  
  @media (min-width: 1025px) {
    top: 7vh;
  }
  `
