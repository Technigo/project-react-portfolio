import React from 'react';
import styled from 'styled-components'

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

export const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Contact</h2>
      <p>Jessica Hansson</p>
      <p>phone</p>
      <p>mail</p>
    </FooterWrapper>
  )
}