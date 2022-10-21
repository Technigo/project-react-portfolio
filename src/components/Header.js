import React from 'react'
import HeaderImg from '../images/headerimg.jpg'
import ProfileImg from '../images/kristin.png'
import { Background, ProfileImage, HeaderText, Name, Frontend, Designer, IconsWrapper, Icon } from '../styles/Header'
import Github from '../icons/github.svg'
import Linkedin from '../icons/linkedin.svg'

const Header = () => {
  return (
    <Background>
      <img className="header-image" src={HeaderImg} alt="background with faded shapes" />
      <ProfileImage src={ProfileImg} alt="profile" />
      <IconsWrapper>
        <a href="https://github.com/Kristin-Larsson"><Icon src={Github} alt="Github" /></a>
        <a href="https://www.linkedin.com/in/kristin-larsson/"><Icon src={Linkedin} alt="Linkedin" /></a>
      </IconsWrapper>
      <HeaderText>
        <Name>PROTFOLIO:</Name>
        <Name>KRISTIN LARSSON</Name>
        <Frontend>frontend developer</Frontend>
        <Designer>+ designer</Designer>
      </HeaderText>
    </Background>
  );
}

export default Header;