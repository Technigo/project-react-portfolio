import React from 'react-dom'
import { SecondTitleWhite, MainTextWhite, Wrapper } from '../styles/Main'
import { FooterSection, IconsWrapper, Icon } from '../styles/Footer'
import Github from '../icons/github.svg'
import Linkedin from '../icons/linkedin.svg'

const Footer = () => {
  return (
    <FooterSection>
      <IconsWrapper>
        <a href="https://github.com/Kristin-Larsson"><Icon src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/kristin-larsson/"><Icon src={Linkedin} alt="Linkedin" /></a>
      </IconsWrapper>
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