import React from 'react'
import styled from 'styled-components'
import { Icons } from './icons/Icons'
import header2 from './images/header2.jpg'

export const Header = () => {
  return (
    <HeaderStyling>
      <IconGroup>
        <Icons />
      </IconGroup>
      <h1>PORTFOLIO: LINNÉA AJGER</h1>
      <h2>frontend developer</h2>

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
    `

const IconGroup = styled.div`
    position: absolute;
    top: 50px;
    right: 30px;
    display: flex;
    justify-content: flex-end;
  `