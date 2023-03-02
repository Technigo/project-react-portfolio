import React from 'react'
import styled from 'styled-components'
import { InnerWrapper } from './Styling'
import github from './images/icons/github.svg'
import linkedin from './images/icons/linkedin.svg'
import profile from './images/profile.jpg'
import headerpicture from './images/headerpicture.jpg'

export const Header = () => {
  return (
    <HeaderWrapper>
      <SoMeHeader>
        <SoMeLink href="https://www.linkedin.com/in/maria-westling-a6327315b/"><img src={linkedin} alt="Linkedin" /></SoMeLink>
        <SoMeLink href="https://github.com/marwebdesign"> <img src={github} alt="Github" /></SoMeLink>
      </SoMeHeader>
      <InnerWrapper>
        <HeaderText>
          <HeaderName>PORTFOLIO: <Name>MARIA WESTLING</Name></HeaderName>
          <HeaderFrontEnd>frontend developer</HeaderFrontEnd>
          <HeaderBackground>+ objects conservator</HeaderBackground>
        </HeaderText>
        <ProfileImage src={profile} alt="profile" />
      </InnerWrapper>
    </HeaderWrapper>
  )
}

export const HeaderWrapper = styled.header`
  width: 100%;
  position: relative;
  height: 520px;
  background-image: url(${headerpicture});
  color: #F1EFDC;
  font-family: 'Montserrat', sans-serif;
`

export const SoMeHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 7px;
  padding-top: 15px;
  margin-right: 5%;
@media (min-width: 1025px) {
  padding-top: 30px;
  margin-right: 15%;
  gap: 10px;
}
`
export const HeaderText = styled.div`
  gap: 7px;
  padding: 30px;
  width: 45%;
@media (min-width: 1025px) {
  margin-left: 15%;
}
`

export const HeaderName = styled.h3`
  font-size: 15px;
  margin-bottom: 3%;
@media (min-width: 1025px) {
  font-size: 20px;
}
`
export const Name = styled.span`
  font-weight: bold;
`

export const HeaderFrontEnd = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 3%;
@media (min-width: 1025px) {
  font-size: 45px;
}
`

export const HeaderBackground = styled.h2`
  font-size: 20x;
@media (min-width: 1025px) {
  font-size: 30px;
}
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  position: absolute;
  right: 25px;
  bottom: -5%;
  width: 250px;
  border: 2px solid white;
@media (min-width: 1025px) {
  right: 200px;
  width: 300px;
}
`

export const SoMeLink = styled.a`
  transition: 0.3s;
&: hover {
  opacity: 0.5;
  }
  `