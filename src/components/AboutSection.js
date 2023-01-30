import React from 'react';
import { Section, Wrapper } from 'components/Section';
import { About, AboutWrapper, Line, Dot, LinkedBtn, LinkedPrompt } from 'components/About.js'

const AboutSection = () => {
  return (
    <Section primary>
      <Wrapper>
        <AboutWrapper>
          <About> <Line /><Dot /> Hi, I´m Cecilia - an ambitious, social and out-going
            frontend developer with love for code and design! I have extensive experience from
            working towards clients from a previous career in dentistry.
            I thrive in challenging environments where I strive to deliver
            out-of-the-box solutions.
          <br />
          <br />
          <LinkedPrompt>
            <br />
            <a
              href="https://github.com/Sneezan"
              rel="noreferrer"
              target="_blank">
              <LinkedBtn type="button"> 🤍</LinkedBtn>
            </a>
          </LinkedPrompt>
          </About>
        </AboutWrapper>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
