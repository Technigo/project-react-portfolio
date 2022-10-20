import React from 'react'
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './GlobalStyles';

export const Intro = styled.p`
padding: 10%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 1.2em;
line-height: 138%;
`;

export const AboutMe = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Intro> Hello! I am a Frontend developer with a background in
             business translation and interpretation as well as teaching and education.
            I am all for creating simple and neat solutions for everyone to access and enjoy!
        </Intro>
      </InnerWrapper>
    </OuterWrapper>
  );
};

