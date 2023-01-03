import React from 'react';
import styled from 'styled-components/macro';
import { SectionHeading, InnerWrapper, OuterWrapper, BodyText } from '../library/GlobalStyles'

export const TechSection = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>TECH</SectionHeading>
        <TechBodyText>
          JavaScript, HTML, CSS, <Span>React</Span>, Redux, Node.js, Mongo DB,
           Web Accessibility, API:s, Github, mob programming, pair programming
        </TechBodyText>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const Span = styled.span`
  font-weight: bold; 
  color: var(--color-eggplantPink);
`;

const TechBodyText = styled(BodyText)`
  padding: 0 30px;
`;