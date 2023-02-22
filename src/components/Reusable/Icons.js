/* eslint-disable indent */
import React from 'react'
import styled from 'styled-components/macro'

export const Icons = ({ href, imgSrc }) => {
    return (
        <div>
            {href && <StyledIcons>{href}</StyledIcons>}
            {imgSrc && <StyledIcons>{imgSrc}</StyledIcons>}
        </div>
    )
}

export const StyledIcons = styled.div`
  display: flex;
  gap: 10px;
 
  & img {
   height: 50px;
}
  @media screen and (min-width: 1024px) {    
    & :hover {
      opacity: 75%;
      transition: 0.3s ease;
    }
  }
`