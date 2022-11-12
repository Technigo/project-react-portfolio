import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SiteSection, SectionTitle } from './global/GlobalStyling';

export const Tech = () => {
  const TechSkillHighlight = styled.span`
    font-weight: 700;
  `
  return (
    <OuterWrapper backgroundLightGrey>
      <InnerWrapper>
        <SiteSection>
          <SectionTitle>
            <p>tech</p>
          </SectionTitle>
          <p>
            <TechSkillHighlight>HTML</TechSkillHighlight>,
            <TechSkillHighlight>CSS</TechSkillHighlight>,
            Flexbox,
            Grid,
            <TechSkillHighlight> JavaScript</TechSkillHighlight>,
            <TechSkillHighlight> React</TechSkillHighlight>,
            <TechSkillHighlight> JSX</TechSkillHighlight>,
            Web Accessability,
            API:s,
            Mob-programming,
            Pair-programming,
            GitHub
          </p>
        </SiteSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}