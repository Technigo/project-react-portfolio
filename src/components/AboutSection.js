import React from 'react';
import { Section, Wrapper } from 'components/Section';
import { About, AboutWrapper, Line, Dot } from 'components/About.js'

const AboutSection = () => {
  return (
    <Section>
      <Wrapper>
        <AboutWrapper>
          <About> <Line /><Dot /> Hi there, I´m Cecilia - a junior developer with love
            for code and design! I thrive in challenging environments and strive
            to deliver something extra. Welcome to my corner where I publish
            the latest projects I´ve been working on.
          </About>
        </AboutWrapper>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
