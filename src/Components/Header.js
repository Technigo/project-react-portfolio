/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
/* import OuterWrapper from 'StyledComponents/GlobalComponents'; */

const Headerbackground = styled.header`
width: 100%;
    height: 50vh;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    background-color: lightblue;
`;

const ProfileImage = styled.img`
position: absolute;
    right: 20%;
    bottom: -10%;
    border: 2px solid white;
    border-radius: 50%;
`

const TextContainer = styled.div`
position: absolute;
font-family: 'Roboto';
color: #FFFFFF;
left: 24px;
    top: 50px;
`
/* const SoMeIcons = styled.div`
position: absolute;
    right: 20%;
    top: 10%;
` */

const Header = () => {
  return (
    <Headerbackground>
      <ProfileImage src="/images/ceciliaportfolio.jpg" />
      <TextContainer>
        <h3 className="first-heading">Portfolio: Cecilia Rådén</h3>
        <h1 className="second-heading">frontend developer</h1>
        <h2 className="third-heading">with an administrative background</h2>
      </TextContainer>
    </Headerbackground>
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