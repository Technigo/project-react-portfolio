import React from 'react';
import styled from 'styled-components/macro'

import { Section, SectionTitle, TextWrapper, Wrapper } from 'styledcomponents/Section';

const TechStackWrap = styled(TextWrapper)`
padding-left: 20%;
padding-right: 20%;
text-align: center;
`;

const TechStack = () => {
  return (
    <Section primary>
      <Wrapper>
        <SectionTitle>Tech Stack</SectionTitle>
        <TechStackWrap>JavaScript ES6, HTML5, React, CSS, Flexbox,
         web Accessibly, API:s,
         Agile methodologies, mob-programming,
         pair-programming, GitHub.
        </TechStackWrap>
      </Wrapper>
    </Section>
  );
};

export default TechStack;
