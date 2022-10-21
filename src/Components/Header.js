/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, SoMeIcons } from '../StyledComponents/GlobalComponents'
import ceciliaportfolio from '../images/ceciliaportfolio.jpg'
import leaves from '../images/leaves.jpg'

const Headerbackground = styled.header`
width: 100%;
    height: 50vh;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    background-image: url(${leaves});
    background-size: cover;

    h3 {
      font-size: 24pt;
      font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.04em;
    width: 220px;
    }
    h1 {
      font-size: 40px;
      font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    letter-spacing: 0.04em;
    font-family: 'Montserrat', sans-serif;
    width: 220px;
    }
    h2 {
      font-size: 24pt;
      font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.04em;
    width: 220px;
  
    }
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
          <a href="https://github.com/CeciliaMichele">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/ceciliaraden/">
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </ClonedSoMeIcons>
        <ProfileImage src={ceciliaportfolio} alt="Picture of Cecilia" />
        <TextContainer>
          <h3>Portfolio: Cecilia Rådén</h3>
          <h1>frontend developer</h1>
          <h2>with an administrative background</h2>
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