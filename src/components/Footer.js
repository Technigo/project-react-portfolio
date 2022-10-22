import React from 'react'
import styled from 'styled-components'
import { InnerWrapper } from './Styling'

export const Footer = () => {
  return (
    <FooterWrapper>
      <InnerWrapper>
        <FooterContent>
          <FooterHeading>CONTACT</FooterHeading>
          <FooterText>
            <p>Maria Westling</p>
            <p>+46 70 398 45 54</p>
            <p>maria.westling@gmail.com</p>
          </FooterText>
        </FooterContent>
      </InnerWrapper>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.footer`
background-color: #D36B00;
width: 100%;
display: flex;
justify-content: center;
`

export const FooterContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
font-family: 'Montserrat', sans-serif;
color: white;
`
export const FooterHeading = styled.h3`
font-weight: 700;
padding-bottom: 25px;
font-size: 21px;
@media (min-width: 1025px) {
font-size: 25px;
}
`

export const FooterText = styled.div`
font-size: 17px;
line-height: 25px;
@media (min-width: 1025px) {
font-size: 20px;
}
`