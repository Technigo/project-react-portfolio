import styled from 'styled-components'
import React from 'react'
import Charlotte from '../images/Charlotte.png'
import HeaderImg from '../images/HeaderImg.jpg'

export const Header = () => {
  return (
    <>
      <Background src={HeaderImg} alt="background-header" />
      <Name>PORTFOLIO: CHARLOTTE JOHANSSON</Name>
      <Title>frontend developer</Title>
      <CurrentTitle>+ project manager</CurrentTitle>
      <ProfileImage src={Charlotte} alt="Charlotte" />
    </>
  )
}

export default Header;

const Background = styled.img`
    position: relative;
    height: 500px;
`
const Title = styled.h1`
    position: absolute;
    width: 220px;
    left: 24px;
    top: 121px;
    font-family: 'Roboto';
    letter-spacing: 0.04em;
    color:#355C7D;
`

const Name = styled.h3`
    font-size: 16px;
    color: #355C7D;
    width: fit-content;
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 100px;
    left: 30px;
`

const CurrentTitle = styled.h4`
    position: absolute;
    width: 220px;
    left: 24px;
    top: 195px;
    font-family: 'Roboto';
    letter-spacing: 0.04em;
    color:#355C7D;
`

const ProfileImage = styled.img`
    position: absolute;
    width: 180px;
    height: 180px;
    left: 171px;
    top: 356px;
    border-radius: 50%;
    border: 3px solid #355C7D; 
`