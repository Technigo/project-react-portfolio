import React from 'react';
import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>CONTACT</FooterTitle>
      <FooterText>
        <p>Jessica Hansson</p>
        <p>+46735117716</p>
        <p>jessica.hansson@hotmail</p>
      </FooterText>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.section`
    font-family: Montserrat;
    background: #483643;
    text-align: center;
    color: rgb(255, 255, 255);
    margin-top: 25px;
    padding: 10px;
    border-top: solid 2px rgb(36, 31, 58);
    line-height: 25px;
    padding-bottom: 100px;
`

const FooterTitle = styled.h2`
    font-size: 25px;
    font-weight: 400;
    padding-bottom: 55px;
    padding-top: 50px;  
`
const FooterText = styled.p`
    font-size: 17px;
    font-weight: 400;
`