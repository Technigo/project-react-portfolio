import React from 'react'
import styled from 'styled-components'
import { HeaderFirstHeading, HeaderSecondHeading, HeaderThirdHeading } from 'StyledComponents/HeadlineStyles'
import BackgroundImage from '../Images/background1.jpg'
import ProfileImage from '../Images/jhansson.png'

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>
        <HeaderFirstHeading>PORTFOLIO: <Bold> JESSICA HANSSON</Bold></HeaderFirstHeading>
        <HeaderSecondHeading>frontend developer</HeaderSecondHeading>
        <HeaderThirdHeading> & passionate about sustainable development </HeaderThirdHeading>
      </HeaderText>
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
  width: 180px; 
  height: 180px; 
  border-radius: 50%;

  border:solid 2px rgb(255, 255, 255); 

  @media (min-width: 668px) {
    right: 7vh; 
    width: 220px;
    height: 220px;
  }

  @media (min-width: 1025px) {
    right: 10vh; 
  }
`

const Bold = styled.span`
font-weight: bold;
`
/*
const SocialMediaContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 20px;
` */