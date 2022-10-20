/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionHeader } from './GlobalStyleComponents';

const Tech = ({ color }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <AboutMeContainer>
          <SectionHeader color={color}>TECH</SectionHeader>
          <AboutMeBox>
            <TechParagraph>HTML, CSS, Flexbox, JavaScript, ES6, JSX,<SpanColored> React</SpanColored>,<SpanColored> React Hooks</SpanColored>,<SpanColored> Redux</SpanColored>, Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
            </TechParagraph>
          </AboutMeBox>
        </AboutMeContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const AboutMeContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
}
`;

const AboutMeBox = styled.div`
    display:flex;
    align-items: center;
`;

const TechParagraph = styled.p`
    color: blue;
`;

const SpanColored = styled.span` 
    color: #54BAB9;
`;

export default Tech;