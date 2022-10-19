import React from 'react'
import styled from 'styled-components/macro'
import { Icons } from './Icons'
import header2 from './images/header2.jpg'
import profile3 from './images/profile3.jpeg'
import { IconGroup } from './globalStyling'

export const Header = () => {
  return (
    <HeaderStyling>
      <IconGroup
        position="absolute"
        top="5%"
        right="7%"
        justifyContent="flex-end">
        <Icons
          iconWidth="20px"
          iconMargin="10px"
          boxMargin="3px"
          boxWidth="40px" />
      </IconGroup>
      <Headlines>
        <h1>PORTFOLIO: <span>LINNÉA AJGER</span></h1>
        <h2>frontend developer</h2>
      </Headlines>
      <ProfilePicture src={profile3} alt="profile" />
    </HeaderStyling>

  )
}

const HeaderStyling = styled.div`
    position: relative;
    height: 520px;
    left: 0px;
    top: 0px;
    background-image: url(${header2});
    background-size: cover;
    width: 100%;
    color: white;
    `;

const Headlines = styled.div`
    position: absolute;
    width: 60%;
    height: 50%;
    left: 7%;
    top: 30%;
    letter-spacing: 0.04em;

      h1 {
      font-size: 1rem;
      font-family: 'Roboto', sans-serif;
      line-height: 1.4rem;
    }

    span {
      font-weight: 700;
    }

    h2 {    
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.7rem;
    }
    `

const ProfilePicture = styled.img`
    position: absolute;
    right: 10%;
    bottom: -30px;
    width: 50%;
    max-width: 250px;
    border: 2px solid #feffff;
    border-radius: 50%;
    `