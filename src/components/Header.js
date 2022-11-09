import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, Devices } from 'styles/mainStyles';
import linksImg from '../Images/SoMe-white.png';
import backgroundImageSmall from '../Images/pexels-tara-winstead-small.jpg';
import backgroundImageLarge from '../Images/pexels-tara-winstead-large.jpg';
import ProfileImage from '../Images/Linda.jpg';

const Header = () => {
  // Function that navigates the user to the bottom of the page, when the image is clicked
  let linksBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
    linksBottom = '';
  }

  return (
    <Background>
      <CloneWrapper>
        <HeaderLinks type="image" src={linksImg} onClick={linksBottom} name="links-at-the-bottom" alt="bottom-scroll" />
        <TitleName>PORTFOLIO: <BoldName>LINDA MALM</BoldName></TitleName>
        <TitleFirst>frontend developer</TitleFirst>
        <TitleSecond>+ digital designer</TitleSecond>
        <ProfileImg src={ProfileImage} alt="Linda-Malm" />
      </CloneWrapper>
    </Background>
  )
}

export default Header;

// Styled components
const Background = styled.div`
    position: relative;
    height: 400px;
    background-image: url(${backgroundImageSmall});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    background-position: center;

    @media ${Devices.tablet} {
      height: 500px;
      background: url(${backgroundImageLarge});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
`

const CloneWrapper = styled(InnerWrapper)`
  padding: 20% 7% 10% 7%;
  background-color: transparent;

  @media ${Devices.tablet} {
    padding: 10% 7%;
  }

  @media ${Devices.laptop} {
    padding: 10% 0%;
  }

  @media ${Devices.desktop} {
    padding: 0% 0%;
  }
`

const HeaderLinks = styled.input`
    position: absolute;
    width: 30%;
    height: auto;
    top: 7%;
    right: 10%;

    @media ${Devices.tablet} {
      width: 10%;
      right: 15%; 

      &:hover {
      filter: invert(80%);
      }
    }
`

const TitleName = styled.h1`
  color: #FFFFFF;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Roboto', sans-serif;

  @media ${Devices.tablet} {
    font-size: 20px;
    line-height: 25px;
  }
`
const BoldName = styled.span`
  font-weight: bold;
`

const TitleFirst = styled.h2`
  color: #FFFFFF;
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;

  @media ${Devices.tablet} {
    font-size: 58px;
  }
`

const TitleSecond = styled.h3`
  color: #FFFFFF;
  font-size: 20px;
  line-height: 25px;
  font-family: 'Montserrat', sans-serif;

  @media ${Devices.tablet} {
    font-size: 35px;
    line-height: 50px;
  }
`

const ProfileImg = styled.img`
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  width: 150px;
  height: auto;
  position: absolute;
  right: 55%;
  bottom: -5%;

  @media ${Devices.tablet} {
    width: 20%;
    right: 45%;
  }

  @media ${Devices.laptop} {
    width: 15%;
    right: 80%;
  } 

  @media ${Devices.desktop} {
    width: 5%;
    right: 80%;
  }
`

