import React from 'react-dom'
import { SecondTitleWhite, MainTextWhite, Wrapper } from '../styles/Main'
import { FooterSection } from '../styles/Footer'

const Footer = () => {
  return (
    <FooterSection>
      <SecondTitleWhite>Contact</SecondTitleWhite>
      <Wrapper>
        <MainTextWhite>
        Kristin Larsson
        +46 70 2639489
        kristinlarsson88@gmail.com
        </MainTextWhite>
      </Wrapper>
    </FooterSection>
  );
}

export default Footer;