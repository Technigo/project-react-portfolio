import React from 'react';
import styled from 'styled-components'

import { Highlight, Section, SectionTitle, TextWrapper, Wrapper } from 'components/Section';

const TechStackWrap = styled(TextWrapper)`
padding-left: 10%;
padding-right: 10%;
padding: 6%;
text-align: center;
font-size: 1.3rem;
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

const TechStack = () => {
  return (
    <Section primary>
      <Wrapper>
        <SectionTitle>Tech Stack</SectionTitle>
        <TechStackWrap>
          <Highlight>JavaScript ES6 </Highlight>| HTML5 |<Highlight> React </Highlight> |
          <Highlight> CSS </Highlight>| Flexbox | web Accessibly |  API:s |
          <Highlight> Agile Methodologies</Highlight>  |  mob-programming |
         pair-programming |  <Highlight>GitHub</Highlight>
        </TechStackWrap>
      </Wrapper>
    </Section>
  );
};

export default TechStack;
