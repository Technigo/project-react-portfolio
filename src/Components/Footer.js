import React from 'react'
import styled from 'styled-components'
import { P } from '../Styled components/GlobalStyles'

const Footer = () => {
  return (
    <FooterSection>
      <ContactContainer>
        <ContactHeader>CONTACT</ContactHeader>
        <P>Jessika Lind</P>
        <P>+46 76 195 55 14</P>
        <P>jessika.lind@su.se</P>
      </ContactContainer>
    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.footer`
  background: #B2A4FF;
  height: 40vh;
  padding-top: 20vh; 
`
const ContactContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContactHeader = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  margin-bottom: 5vh;
`