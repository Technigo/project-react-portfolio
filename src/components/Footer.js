import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        <h4>CONTACT</h4>
        <FooterInformation>
          <p>Maria Westling</p>
          <p>+46 70 398 45 54</p>
          <p>maria_westling@hotmail.com</p>
        </FooterInformation>
      </FooterText>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.footer`
background-color: #D36B00;
width: 100%;
display: flex;
justify-content: center;
`

export const FooterText = styled.div`
`

export const FooterInformation = styled.div`

`