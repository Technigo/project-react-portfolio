import React from 'react'
import { FooterOuterWrapper, InnerWrapper } from './styled/Wrappers'

export const Footer = () => {
  return (
    <FooterOuterWrapper>
      <InnerWrapper centertext>
        <h3>CONTACT</h3>
        <p>Jarl Niclas Bojesen Jensen</p>
        <p>+46 76 592 26 09</p>
        <p>mail@jnbjensen.com</p>
      </InnerWrapper>
    </FooterOuterWrapper>
  )
}