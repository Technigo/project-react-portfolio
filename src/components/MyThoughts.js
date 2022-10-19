import React from 'react';
import styled from 'styled-components/macro';
import { ProjectCard, Image } from 'styles/GlobalStyles';
import compTalk from '../assets/compTalk.jpg';
import eyeForDesign from '../assets/eyeForDesign.jpg';

export const MyThoughts = () => {
  return (
    <>
      <ThoughtCard href="#" target="_blank" rel="noopener noreferrer">
        <Image src={compTalk} alt="" />
      </ThoughtCard>
      <ThoughtCard href="#" target="_blank" rel="noopener noreferrer">
        <Image src={eyeForDesign} alt="" />
      </ThoughtCard>
    </>
  )
}

export const ThoughtCard = styled(ProjectCard)`
  @media (min-width: 668px) and (max-width:1024px) {
    height: 48vh;
  }

  @media (min-width: 1025px) {
    height: 65vh;
  }
`