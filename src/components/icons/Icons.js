import React from 'react'
import styled from 'styled-components/macro'
import GithubHeader from './GithubHeader.svg'
import LinkedInHeader from './LinkedInHeader.svg'
import StackOverflowHeader from './stackoverflow-icon.svg'

export const Icons = () => {
  const StyledIcons = styled.img`
    border-radius: 50%;
    border: 2px solid black;
    padding: 1%;
    width: 10vw;
    filter: invert(1);
    margin: 1%;
`
  return (
    <>
      <StyledIcons src={GithubHeader} alt="Github icon" />
      <StyledIcons src={LinkedInHeader} alt="Linked in icon" />
      <StyledIcons src={StackOverflowHeader} alt="Stack Overflow icon" />
    </>
  )
}
