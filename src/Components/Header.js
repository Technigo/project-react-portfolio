/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, SoMeIcons } from '../StyledComponents/GlobalComponents'
import cicci from '../images/cicci.jpg'
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
      font-size: 15px;
  margin-bottom: 3%;
@media (min-width: 1025px) {
  font-size: 20px;
}
    }
    h1 {
      font-size: 35px;
  font-weight: 700;
  margin-bottom: 3%;
@media (min-width: 1025px) {
  font-size: 45px;
}
    }
    h2 {
      font-size: 20x;
@media (min-width: 1025px) {
  font-size: 30px;
}
    }
`

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
    right: 5%;
    top: 5%;
`

const Header = () => {
  return (
    <OuterWrapper>
      <Headerbackground>
        <ClonedSoMeIcons>
          <a
            href="https://github.com/CeciliaMichele"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/ceciliaraden/"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </ClonedSoMeIcons>
        <ProfileImage src={cicci} alt="Picture of Cecilia" />
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
