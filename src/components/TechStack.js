import React from 'react';
import styled from 'styled-components/macro'

import { Highlight, Section, SectionTitle, TextWrapper, Wrapper } from 'styledcomponents/Section';

const TechStackWrap = styled(TextWrapper)`
padding-left: 10%;
padding-right: 10%;
text-align: center;
font-size: 1.3rem;
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
