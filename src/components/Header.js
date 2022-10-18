/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <HeaderBackground>
      <LinkContainer>
        <SocialLinks />
      </LinkContainer>
      <HeaderInfo tabIndex="0">
        <h3>Portfolio: <span>Sarah Kneedler</span></h3>
        <h1>frontend developer</h1>
        <h2>+ with a philosophy bachelor in social work</h2>
      </HeaderInfo>

      <ProfileImg
        src="../assets/profilepic.webp"
        alt="Photo of Sarah"
        tabIndex="0" />

    </HeaderBackground>

  )
}

export default Header;

const HeaderBackground = styled.header`
    background-image: url(../assets/headerimg.jpg);
    position: relative;
    height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    `
const LinkContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    margin-right: 5vh;
    margin-top: 10%;
    gap: 15px;
    `
const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 70vw;
    height: 25vh;
    left: 10%;
    top: 30%;
    color: white;

    h1 {
    font-weight: bold;
    font-size: 35px;
    letter-spacing: 0.04em;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  h2 {
    font-weight: 400;
    font-size: 25px;
  }
  h3 {
    font-weight: 200;
    font-size: 17px;
    text-transform: uppercase;
  }
  span {
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 400;
    display: block;
    font-weight: bold;
  }
`
const ProfileImg = styled.img`
    position: absolute;
    right: 10%;
    bottom: -15%;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 2px solid whitesmoke;
    overflow: hidden;
    object-fit: cover;
  `