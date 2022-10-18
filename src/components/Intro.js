import React from 'react';
import { IntroWrapper, Line, Dot } from 'StyledComponents/IntroStyle.js'
// import { OuterWrapper, InnerWrapper } from 'StyledComponents/GlobalStyles';

export const Intro = () => {
  return (
    <IntroWrapper grey>
      <Line /><Dot />  Coming from a background within biology and environmental
      science, I have now taken on the challange to become a frontend developer.
      Combining my experience from project and business development,
      I hope to grow a career within programming and contribute to the progress of the
      tech world.
    </IntroWrapper>
  );
};

