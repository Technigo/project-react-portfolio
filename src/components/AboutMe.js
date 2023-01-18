import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, OuterWrapper, Paragraph } from '../styles/GlobalStyles';
import lollipop from '../assets/lollipop.png';

const AboutMe = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Paragraph>
          <StartSymbol src={lollipop} alt="lollipop separator" />
          Hello! I am a strategic and experienced Revenue Manager
          with many years in hotel management teams.
          I easily maintain the helicopter view while not losing focus
          on details and thrive on problem solving.
          Working in teams suits me and I love being one part of a larger whole.
          Now adding coding to my skill set by studying at Technigos bootcamp.
          Focusing on JavaScript (ES6), React, HTML5, CSS and server-side programming with Node.js,
          with weekly projects covering everything from the basics of programming to structuring
          web projects using the latest technology.
        </Paragraph>
      </InnerWrapper>
    </OuterWrapper>

  )
}

const StartSymbol = styled.img`
  width: 3rem;
  margin-right: 5px;

  @media (min-width: 668px) {
    width: 6.1rem;
  }
`

export default AboutMe