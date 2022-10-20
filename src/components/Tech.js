import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SectionTitle } from './global/GlobalStyling';

export const Tech = () => {
  const TechSection = styled.div`
    text-align: center;
    padding: 50px 0;
  `
  const TechSkillHighlight = styled.span`
    font-weight: 700;
  `
  return (
    <OuterWrapper>
      <InnerWrapper>
        <TechSection>
          <SectionTitle>
            <p>tech</p>
          </SectionTitle>
          <p>
            <TechSkillHighlight>HTML</TechSkillHighlight>,
            <TechSkillHighlight>CSS</TechSkillHighlight>,
          Flexbox,
          Grid,
            <TechSkillHighlight>JavaScript</TechSkillHighlight>,
          Web Accessability,
          API:s,
          Mob-programming,
          Pair-programming,
          GitHub
          </p>
        </TechSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}