/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { SoMeIcons } from 'StyledComponents/GlobalComponents'

const ForMore = styled.div`
height: 5vh;
`

const ContactContainer = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 50px;
width: 100%;
    height: 20vh;
    position: relative;
    background-color: blue;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 668px) and (max-width: 1024px) {
    height: 30vh;
  }
  @media (min-width: 1025px){ 
    height: 30vh;
  }
`
const ClonedSoMeIcons = styled(SoMeIcons)`
display: flex;
justify-content: center;
align-items: center;
color: black;
`

const Footer = () => {
  return (
    <>
      <ForMore>
        <ClonedSoMeIcons>
          <i className="fa-brands fa-github" />
          <i className="fa-brands fa-linkedin-in" />
        </ClonedSoMeIcons>
      </ForMore>
      <ContactContainer>

        <p>CONTACT</p>

        <p>Cecilia Rådén</p>

        <p>+46 739 547 099</p>

        <p>cecilia.raden@gmail.com</p>
      </ContactContainer>
    </>
  )
}

export default Footer