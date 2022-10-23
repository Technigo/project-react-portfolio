import React from 'react'
import styled from 'styled-components/macro'
import { Icons } from './Icons'
import header2 from './images/header2.jpg'
import profile3 from './images/profile3.jpeg'
import { IconGroup } from './globalStyling'

export const Header = () => {
  return (
    <HeaderStyling>
      <HeaderContent>
        <IconGroup
          position="absolute"
          top="10%"
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
      </HeaderContent>
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

    @media (min-width: 1025px) {
      height: 540px;
    }
    `

const Headlines = styled.div`
    position: absolute;
    width: 220px;
    height: 50%;
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
    
    @media (min-width: 668px) {
      width: 250px;
    }
    `

const ProfilePicture = styled.img`
    position: absolute;
    right: 0%;
    bottom: -30px;
    max-width: 180px;
    border: 2px solid #feffff;
    border-radius: 50%;

    @media (min-width: 668px) {
      max-width: 260px;
    }
    `

const HeaderContent = styled.div`
    margin: 0 auto;
    height: 520px;
    width: 80%;
    max-width: 1100px;
    position: relative;

    @media (min-width: 1025px) {
      height: 540px;
    }
`