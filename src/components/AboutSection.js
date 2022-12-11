import React from 'react';
import { Section, Wrapper } from 'components/Section';
import { About, AboutWrapper, Line, Dot } from 'components/About.js'

const AboutSection = () => {
  return (
    <Section primary>
      <Wrapper>
        <AboutWrapper>
          <About> <Line /><Dot /> Hi, I´m Cecilia - an ambitious, social and out-going
            frontend developer with love for code and design! I have a long experience from
            working towards clients and I thrive in challenging environments
            where I strive to deliver out-of-the-box solutions.
          </About>
        </AboutWrapper>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
