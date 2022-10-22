import styled from 'styled-components'
import React from 'react'
import Charlotte from '../images/Charlotte.png'
import HeaderImg from '../images/HeaderImg.jpg'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Background
        src={HeaderImg}
        alt="background-header" />
      <Name>PORTFOLIO: CHARLOTTE JOHANSSON</Name>
      <Title>frontend developer</Title>
      <CurrentTitle>+ project manager</CurrentTitle>
      <ProfileImage src={Charlotte} alt="Charlotte" />
    </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.div`
    position: relative;
`

const Background = styled.img`
    position: absolute;
    width: 100%;
    height: 520px;
    left: 0px;
    top: 0px;
`

const Name = styled.h3`
    position: relative;
    font-size: 14px;
    color: #355C7D;
    width: fit-content;
    display: block;
    margin: 0 auto;
    left: -25px;
    top: 160px;

    @media (min-width: 668px) and (max-width: 1023px){
      left: -200px;
    }

    @media (min-width: 1024px){
    left: -200px;
    }
`

const Title = styled.h1`
    position: relative;
    font-size: 44px;
    top: 140px;
    left: 10px;
    width: fit-content;
    display: block;
    font-family: 'Roboto';
    letter-spacing: 0.04em;
    color:#355C7D;
`

const CurrentTitle = styled.h4`
    position: relative;
    font-size: 26px;
    top: 110px;
    left: 10px;
    font-family: 'Roboto';
    letter-spacing: 0.04em;
    color:#355C7D;
`

const ProfileImage = styled.img`
    position: relative;
    width: 180px;
    height: 180px;
    left: 140px;
    top: 110px;
    border-radius: 50%;
    border: 3px solid #355C7D; 
 `