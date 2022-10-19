import React from 'react'
import styled from 'styled-components/macro'
import Github from './Github.svg'
import LinkedIn from './LinkedIn.svg'
import StackOverflow from './StackOverflow.svg'

export const Icons = () => {
  return (
    <>
      <StyledLink href="https://www.linkedin.com/in/linneaajger" aria-label="link to Linneas linkedin-profile">
        <StyledIcons src={LinkedIn} alt="Linked in icon" />
      </StyledLink>
      <StyledLink href="https://github.com/LinneaAjger" aria-label="link to Linneas github account">
        <StyledIcons src={Github} alt="Github icon" />
      </StyledLink>
      <StyledLink href="https://stackoverflow.com/users/19495108/linnea-a" aria-label="link to Linneas stack Overflow account">
        <StyledIcons src={StackOverflow} alt="Stack Overflow icon" />
      </StyledLink>
    </>
  )
}

const StyledIcons = styled.img`
margin: 10px;
width: 20px;
`

const StyledLink = styled.a`
border: 2px solid white;
border-radius: 50%;
width: 40px;
display: flex;
justify-content: center;
margin: 3px;
  
`