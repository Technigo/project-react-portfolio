
import React from 'react'
import styled from 'styled-components/macro'
import Github from './icons/Github.svg'
import LinkedIn from './icons/LinkedIn.svg'
import StackOverflow from './icons/StackOverflow.svg'

// eslint-disable-next-line max-len
export const Icons = ({ iconMargin, iconWidth, boxWidth, linkWidth, linkedin, github, stackOverflow }) => {
  return (
    <>
      <StyledLink linkWidth={linkWidth} href="https://www.linkedin.com/in/linneaajger" aria-label="link to Linneas linkedin-profile">
        <OuterBox boxWidth={boxWidth}>
          <StyledIcons iconMargin={iconMargin} iconWidth={iconWidth} src={LinkedIn} alt="Linked in icon" />
        </OuterBox>
        <p>{linkedin}</p>
      </StyledLink>
      <StyledLink linkWidth={linkWidth} href="https://github.com/LinneaAjger" aria-label="link to Linneas github account">
        <OuterBox boxWidth={boxWidth}>
          <StyledIcons iconMargin={iconMargin} iconWidth={iconWidth} src={Github} alt="Github icon" />
        </OuterBox>
        <p>{github}</p>
      </StyledLink>
      <StyledLink linkWidth={linkWidth} href="https://stackoverflow.com/users/19495108/linnea-a" aria-label="link to Linneas stack Overflow account">
        <OuterBox boxWidth={boxWidth}>
          <StyledIcons iconMargin={iconMargin} iconWidth={iconWidth} src={StackOverflow} alt="Stack Overflow icon" />
        </OuterBox>
        <p>{stackOverflow}</p>
      </StyledLink>
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
const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.linkWidth)};
  text-decoration: none;

p{
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  margin-top: 20px;
}
  `