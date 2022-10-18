import React from 'react';
import styled from 'styled-components';

import { Wrapper, SectionTitle, Paragraph } from './GlobalStyles'

export const TechSkills = () => {
  return (
    <Wrapper>
      <SectionTitle>TECH</SectionTitle>
      <TechSkillsText primary>HTML, CSS,
        Flexbox, JavaScript, APIs, React, mob-programming, pair-programming,
        Agile Methodology, Github.
      </TechSkillsText>
    </Wrapper>
  )
}

const TechSkillsText = styled(Paragraph)`
text-align: center;
`
