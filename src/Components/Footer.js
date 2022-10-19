/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { SoMeIcons } from 'StyledComponents/GlobalComponents'

const ForMore = styled.div`
height: 5vh;
`

const ContactContainer = styled.div`
width: 100%;
    height: 30vh;
    position: relative;
    background-color: blue;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 668px) and (max-width: 1024px) {
    height: 40%;
  }
  @media (min-width: 1025px){ 
    height: 60%;
  }
`
const ClonedSoMeIcons = styled(SoMeIcons)`
display: flex;
justify-content: center;
align-items: center;
`

const Footer = () => {
  return (
    <>
      <ForMore>
        <ClonedSoMeIcons>
          <i className="fa-brands fa-linkedin fa-2xl" aria-label="My Linkedin" />
          <i className="fa-brands fa-github-square fa-2xl" aria-label="My Github" />
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