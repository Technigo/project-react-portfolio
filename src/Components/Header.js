/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, SoMeIcons } from '../StyledComponents/GlobalComponents'
import ceciliaportfolio from '../images/ceciliaportfolio.jpg'
import background from '../images/background.jpg'

const Headerbackground = styled.header`
width: 100%;
    height: 50vh;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    background-image: url(${background});
`;

const ProfileImage = styled.img`
position: absolute;
    right: 20%;
    bottom: -10%;
    border: 2px solid white;
    border-radius: 50%;
    width: 200px;
    height: 200px;
`

const TextContainer = styled.div`
position: absolute;
font-family: 'Roboto';
color: #FFFFFF;
left: 24px;
    top: 50px;
`
const ClonedSoMeIcons = styled(SoMeIcons)`
position: absolute;
    right: 20%;
    top: 10%;
`

const Header = () => {
  return (
    <OuterWrapper>
      <Headerbackground>
        <ClonedSoMeIcons>
          <i className="fa-brands fa-linkedin fa-2xl" aria-label="My Linkedin" />
          <i className="fa-brands fa-github-square fa-2xl" aria-label="My Github" />
        </ClonedSoMeIcons>
        <ProfileImage src={ceciliaportfolio} alt="Picture of Cecilia" />
        <TextContainer>
          <h3 className="first-heading">Portfolio: Cecilia Rådén</h3>
          <h1 className="second-heading">frontend developer</h1>
          <h2 className="third-heading">with an administrative background</h2>
        </TextContainer>
      </Headerbackground>
    </OuterWrapper>
  )
}

export default Header

/*
const NameOfElement = styled.div `
background-color: red;
`

  <p lang="se">Portfolio: Cecilia Rådén</p>
        <h1 class="title" tabindex="3">frontend developer</h1>
        <h2 class="second-title">with an background within culture</h2>
*/