import React from 'react-dom'
import { SecondTitleWhite, MainTextWhite, Wrapper } from '../styles/Main'
import { FooterSection } from '../styles/Footer'

const Footer = () => {
  return (
    <FooterSection>
      <SecondTitleWhite>Contact</SecondTitleWhite>
      <Wrapper>
        <MainTextWhite>Kristin Larsson</MainTextWhite>
        <MainTextWhite>0702639489</MainTextWhite>
        <MainTextWhite>kristinlarsson88@gmail.com</MainTextWhite>
      </Wrapper>
    </FooterSection>
  );
}

export default Footer;