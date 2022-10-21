import styled from 'styled-components';
import React from 'react'

export const Footer = () => {
  return (
    <section>
      <FooterText>
        <p>
        Footer
        </p>
      </FooterText>
    </section>
  )
}

export default Footer;

const FooterText = styled.p`
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin: 0px auto 30px;
    width: 320px;
`