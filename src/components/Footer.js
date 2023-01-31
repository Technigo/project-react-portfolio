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
            <Email href="mailto:maria.westling@gmail.com">maria.westling@gmail.com</Email>
          </FooterText>
        </FooterContent>
      </InnerWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #D36B00;
  width: 100%;
  display: flex;
  justify-content: center;
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
`

const FooterHeading = styled.h3`
  font-weight: 700;
  padding-bottom: 25px;
  font-size: 21px;
@media (min-width: 1025px) {
  font-size: 25px;
}
`

const FooterText = styled.div`
  font-size: 17px;
  line-height: 25px;
@media (min-width: 1025px) {
  font-size: 20px;
}
`
const Email = styled.a`
text-decoration: none;
color: white;
`