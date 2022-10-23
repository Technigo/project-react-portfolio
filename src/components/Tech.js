/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { OuterWrapperSecond, InnerWrapper, SectionHeader } from './GlobalStyleComponents';

/* Tech component, that show all the tech i know, with some words with changed colors made with the span */

const Tech = ({ color }) => {
  return (
    <OuterWrapperSecond>
      <InnerWrapper>
        <AboutMeContainer>
          <SectionHeader color={color}>TECH</SectionHeader>
          <AboutMeBox>
            <TechParagraph>HTML, CSS, Flexbox, JavaScript, ES6, JSX,<SpanColored> React</SpanColored>,<SpanColored> React Hooks</SpanColored>,<SpanColored> Redux</SpanColored>, Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
            </TechParagraph>
          </AboutMeBox>
        </AboutMeContainer>
      </InnerWrapper>
    </OuterWrapperSecond>
  );
};

/* Techs styled components */

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
    color: black;
    font-size: 24px;
    line-height: 1.8;
  
    @media (max-width: 800px) {
      font-size: 16px;
      line-height: 1.4;
`;

const SpanColored = styled.span` 
    color: #54BAB9;
`;

export default Tech;