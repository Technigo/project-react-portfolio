
import React from 'react'
import styled from 'styled-components/macro'
import Github from './icons/Github.svg'
import LinkedIn from './icons/LinkedIn.svg'
import StackOverflow from './icons/StackOverflow.svg'

export const Icons = ({ iconMargin, iconWidth, boxWidth }) => {
  return (
    <>
      <a href="https://www.linkedin.com/in/linneaajger" aria-label="link to Linneas linkedin-profile">
        <OuterBox boxWidth={boxWidth}>
          <StyledIcons iconMargin={iconMargin} iconWidth={iconWidth} src={LinkedIn} alt="Linked in icon" />
        </OuterBox>
      </a>
      <a href="https://github.com/LinneaAjger" aria-label="link to Linneas github account">
        <OuterBox boxWidth={boxWidth}>
          <StyledIcons iconMargin={iconMargin} iconWidth={iconWidth} src={Github} alt="Github icon" />
        </OuterBox>
      </a>
      <a href="https://stackoverflow.com/users/19495108/linnea-a" aria-label="link to Linneas stack Overflow account">
        <OuterBox boxWidth={boxWidth}>
          <StyledIcons iconMargin={iconMargin} iconWidth={iconWidth} src={StackOverflow} alt="Stack Overflow icon" />
        </OuterBox>
      </a>
    </>
  )
}

const StyledIcons = styled.img`
margin: ${(props) => (props.iconMargin)};
width: ${(props) => (props.iconWidth)};
`

const OuterBox = styled.div`
border: 2px solid white;
border-radius: 50%;
width: ${(props) => (props.boxWidth)};
display: flex;
justify-content: center;
margin: 3px;
`