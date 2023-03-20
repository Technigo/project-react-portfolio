import React from 'react';
import styled from 'styled-components';

import { Highlight, Section, SectionTitle, TextWrapper, Wrapper } from 'components/Section';

const TechStackWrap = styled(TextWrapper)`
padding-left: 10%;
padding-right: 10%;
padding: 6%;
text-align: center;
font-size: 1.3rem;
color: var(--lightMudSlide);
font-weight: 500;
@media (min-width: 800px) {
padding-left: 25%;
padding-right: 25%;
font-size: 1.4rem;
  }
@media (min-width: 1600px) {
padding-left: 35%;
padding-right: 35%;
font-size: 1.7rem;
  }
`;

const TechSection = styled(Section)`
background-color: var(--darkChocolate);
`

const TechStack = () => {
  return (
    <TechSection>
      <Wrapper>
        <SectionTitle>some of my skills</SectionTitle>
        <TechStackWrap>
          <Highlight>JavaScript & TypeScript </Highlight>| HTML5 |<Highlight> React </Highlight> |
          <Highlight> CSS </Highlight>| Redux | <Highlight> Node.js </Highlight> | Flexbox | APIs |
          <Highlight> Agile Methodologies</Highlight>  |  mob-programming |  MongoDB & Mongoose |
         Git |  <Highlight>Pair-programming</Highlight> | web Accessibility |
          <Highlight> team oriented</Highlight>
        </TechStackWrap>
      </Wrapper>
    </TechSection>
  );
};

export default TechStack;
