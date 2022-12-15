import React from 'react-dom'
import { SecondTitleWhite, MainTextWhite, Wrapper } from '../styles/Main'
import { FooterSection, IconsWrapper } from '../styles/Footer'
import { LinkedinIcon, GithubIcon } from '../styles/Main'
import Github from '../icons/github.png'
import Linkedin from '../icons/linkedin.png'

const Footer = () => {
  return (
    <FooterSection>
      <IconsWrapper>
        <a href="https://github.com/Kristin-Larsson"><GithubIcon src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/kristin-larsson/"><LinkedinIcon src={Linkedin} alt="Linkedin" /></a>
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