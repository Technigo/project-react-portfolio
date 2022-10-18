import React from 'react'
import styled from 'styled-components'
import profileimg from './images/profileimg.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import stackoverflow from './images/stackoverflow.png'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderStyle>
      <img src={linkedin} alt="profile" />
      <img src={github} alt="profile" />
      <img src={stackoverflow} alt="profile" />
      <h3>PORTFOLIO: MARIA WESTLING</h3>
      <h1>frontend developer</h1>
      <h2>+ objects conservator</h2>
      <img src={profileimg} alt="profile" />
    </HeaderStyle>
  )
}

export const HeaderStyle = styled.header`
background-color: aqua;
padding: 20px;
`