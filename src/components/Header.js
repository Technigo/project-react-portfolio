import React from 'react'
import HeaderImg from '../images/headerimg.jpg'
import ProfileImg from '../images/kristin.png'
import { Background, ProfileImage, HeaderText } from '../styles/Header'

const Header = () => {
  return (
    <Background>
      <img className="header-image" src={HeaderImg} alt="background of shapes" />
      <ProfileImage src={ProfileImg} alt="profile" />
      <HeaderText>
        <h2 className="name">PROTFOLIO: KRISTIN LARSSON</h2>
        <h2 className="frontend">frontend developer</h2>
        <h2 className="designer">designer</h2>
      </HeaderText>
    </Background>
  );
}

export default Header;