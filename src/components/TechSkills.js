import React from 'react';
import styled from 'styled-components';

import { Wrapper, SectionTitle, Paragraph } from './GlobalStyles'

export const TechSkills = () => {
  return (
    <Wrapper>
      <SectionTitle>TECH</SectionTitle>
      <TechSkillsText>HTML, CSS,
      JavaScript, APIs, React, Github, Mob-programming, Pair-programming,
        Agile Methodology.
      </TechSkillsText>
    </Wrapper>
  )
}

const TechSkillsText = styled(Paragraph)`
  text-align: center;
  margin-top: 5%;

  @media (min-width: 1024px){
    margin-top: 0;
    font-size: 18px;
  }
`
