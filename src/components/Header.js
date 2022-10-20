import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper } from './global/GlobalStyling';
import Annika from '../assets/Annika.jpg'

export const Header = () => {
  const HeaderBackground = styled.header`
    position: relative;
    height: 70vh;
    width: 100%;
    background-color: #0A638E;
    display: flex;
    justify-content: center;
    align-items: center;  
`
  const HeaderText = styled.div`
    h2 {
        font-size: 1.1rem;
        font-weight: 400;
        font-family: 'Roboto';
        text-transform: uppercase;
        padding-left: 3px;
        color: white;
    }

    h1 {
        font-size: 48px;
        font-weight: 400;
        font-family: 'Roboto';
        text-transform: uppercase;
        padding-left: 3px;
        color: white;
    }

    h3 {
        font-size: 1.1rem;
        font-weight: 400;
        font-family: 'Roboto';
        text-transform: uppercase;
        padding-left: 3px;
        color: white;
    }
`
  const ProfileImageWrapper = styled.div`
    position: absolute;
    overflow: hidden;
    height: 150px;
    width: 150px;
    border: 2px solid #fff;
    border-radius: 50%;
    z-index: 1;
    right: 20%;
    bottom: -20px;
`

  const ProfileImage = styled.img`
    width: 100%;
  `

  return (
    <OuterWrapper>
      <HeaderBackground>
        <InnerWrapper>
          <HeaderText>
            <h2>portfolio annika gadman</h2>
            <h1>frontend developer</h1>
            <h3>code + design</h3>
          </HeaderText>
          <ProfileImageWrapper>
            <ProfileImage src={Annika} alt="Profile picture of Annika" />
          </ProfileImageWrapper>
        </InnerWrapper>
      </HeaderBackground>
    </OuterWrapper>

  )
}