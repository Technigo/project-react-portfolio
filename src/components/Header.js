import React from 'react'
import styled from 'styled-components'
import github from './images/icons/github.svg'
import linkedin from './images/icons/linkedin.svg'
import stack from './images/icons/stack.svg'
import profileimg from './images/profileimg.png'
import headerpicture from './images/headerpicture.jpg'

// import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderStyle>
      <SoMeHeader>
        <SoMeLink> <a href="https://www.linkedin.com/in/maria-westling-a6327315b/"><img src={linkedin} alt="Linkedin" /></a></SoMeLink>
        <SoMeLink><a href="https://github.com/marwebdesign"> <img src={github} alt="Github" /></a></SoMeLink>
        <SoMeLink><a href="https://stackoverflow.com/c/technigo/users/392"><img src={stack} alt="Stack Overflow" /></a></SoMeLink>
      </SoMeHeader>
      <HeaderText>
        <h3>PORTFOLIO: MARIA WESTLING</h3>
        <h1>frontend developer</h1>
        <h2>+ objects conservator</h2>
      </HeaderText>
      <ProfileImage src={profileimg} alt="profile" />
    </HeaderStyle>
  )
}

export const HeaderStyle = styled.header`
padding: 20px;
width: 100%;
position: relative;
height: 520px;
background-image: url(${headerpicture});
color: #F1EFDC;
font-family: 'Montserrat', sans-serif;
`

export const SoMeHeader = styled.div`
padding: 10px;
display: flex;
justify-content: flex-end;
gap: 7px;
`
export const HeaderText = styled.div`

`

export const ProfileImage = styled.img`
border-radius: 50%;
position: absolute;
right: 24px;
bottom: -5%;
width: 250px;
border: 2px solid white;
`
export const SoMeLink = styled.a`
transition: 0.3s;
&: hover {
  opacity: 0.5;
  }
`