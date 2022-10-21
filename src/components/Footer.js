import React from 'react'
import styled from 'styled-components/macro'
import { TitleTertiary, InnerWrapper } from './globalStyling'

export const Footer = () => {
  return (
    <footer>
      <InnerWrapper selectedColor="#3f6f58">
        <TitleTertiary selectedColor="white" marginTop="0">Contact</TitleTertiary>
        <StyledInfo>
          <p>Linnéa Ajger</p>
          <a href="tel:004673-0860444" aria-label="phone number">+46 73 08 60 444</a>
          <a href="mailto:linnea.ajger@gmail.com" aria-label="Email adress">linnea.ajger@gmail.com</a>
        </StyledInfo>
      </InnerWrapper>
    </footer>

  )
}

export const StyledInfo = styled.div`
  font-size: 1.3rem;
  line-height: 1.8rem;  
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
a {
    text-decoration: none;
    color: white;
  }
`