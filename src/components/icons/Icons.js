import React from 'react'
import styled from 'styled-components'
import GithubHeader from './GithubHeader.svg'
import LinkedInHeader from './LinkedInHeader.svg'
import StackOverflowHeader from './stackoverflow-icon.svg'

export const Icons = () => {
  const StyledIcons = styled.img`
    border-radius: 50%;
    border: 2px solid black;
    padding: 10px;
    width: 40px;
    filter: invert(1);
    margin: 8px;
`
  return (
    <>
      <StyledIcons src={GithubHeader} alt="Github icon" />
      <StyledIcons src={LinkedInHeader} alt="Linked in icon" />
      <StyledIcons src={StackOverflowHeader} alt="Stack Overflow icon" />
    </>
  )
}
