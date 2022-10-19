/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components/macro';
import SocialLinks from './SocialLinks';

import HeadImg from '../assets/headerimg.jpg'
import ProfilePic from '../assets/profilepic.webp'

const Header = () => {
  return (
    <HeaderBackground>
      <LinkContainer>
        <SocialLinks />
      </LinkContainer>
      <HeaderInfo tabIndex="0">
        <h3>Portfolio: <SpanName>Sarah Kneedler</SpanName></h3>
        <h1>frontend developer</h1>
        <h2>+ with a philosophy bachelor in social work</h2>
      </HeaderInfo>

      <ProfileImg
        src={ProfilePic}
        alt="Photo of Sarah"
        tabIndex="0" />

    </HeaderBackground>

  )
}

export default Header;

const HeaderBackground = styled.header`
    background-image: url(${HeadImg});;
    position: relative;
    height: 45vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      height: 50vh;
    }

    @media (min-width: 1024px) {
      height: 60vh;
    }
    `
const LinkContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    margin-right: 5vh;
    margin-top: 10%;
    gap: 15px;

    @media (min-width: 768px) {
      margin-right: 10vw;
      margin-top: 10vh;
    };

    @media (min-width: 1024px) {
      margin-right: 17vw;
      margin-top: 13vh;
    }
    `
const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 70vw;
    height: 25vh;
    left: 10%;
    top: 25%;
    color: white; 

    @media (min-width: 768px) {
        width: 35vw;
        left: 12vw;
        top: 15vh;
    }

    @media (min-width: 1024px) {
      top: 20vh;
      left: 20vw;
    }

    h1 {
    font-weight: bold;
    font-size: 35px;
    letter-spacing: 0.04em;
    margin-top: 3%;
    margin-bottom: 3%;

    @media (min-width: 768px) {
        font-size: 40px;
    }

    @media (min-width: 1024px) {
      font-size: 40px;
    }
  }
  h2 {
    font-weight: 400;
    font-size: 25px;

    @media (min-width: 768px) {
        font-size: 30px;
    }
    @media (min-width: 1024px) {
      font-size: 35px;
    }
  }
  h3 {
    font-weight: 200;
    font-size: 17px;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 19px
    }
    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
`
const SpanName = styled.span`
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 400;
  display: block;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 19px;
    display: inline
  }

  @media (min-width: 1024px) {
    font-size: 24px;
    display: inline
  }
`
const ProfileImg = styled.img`
    position: absolute;
    right: 10%;
    bottom: -6vh;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 2px solid whitesmoke;
    overflow: hidden;
    object-fit: cover;
    
    @media (min-width: 768px) {
        height: 10rem;
      width: 10rem;
      border: 3px solid white;
      right: 15vw;
      bottom: -6vh;
        //Ändra dessa 
    }

    @media (min-width: 1024px) {
        height: 13rem;
      width: 13rem;
      right: 18vw;
      bottom: -7vh;
    }
  `