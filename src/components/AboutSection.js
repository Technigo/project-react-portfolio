import React from 'react';
import { Section, Wrapper } from 'components/Section';
import { About, AboutWrapper, Line, Dot, LinkedBtn, LinkedPrompt, Website } from 'components/About.js'
import LInkedIn from '../images/video1.png'

const AboutSection = () => {
  return (
    <Section primary>
      <Wrapper>
        <AboutWrapper>
          <About> <Line /><Dot /> I´m Cecilia - a social, out-going and ambitious
            frontend developer with love for code and design. I have extensive experience from
            working towards clients from a previous career in dentistry and I love meeting
            new people. I thrive in challenging environments where I strive to deliver
            out-of-the-box solutions. With an eagerness to learn, I´m constantly looking for
            oppurtunities to deepen my existing knowledge as well as broaden my skill set.

            Currently I´m an intern at
          <Website>
            <a
              href="https://stryda.gg/"
              rel="noreferrer"
              target="_blank"> Stryda
            </a>
          </Website>, where I work in an agile team,
            delivering real functional features and diving into the world of TypeScript and React
            Query.
          <br />
          <br />
            Click on the play-button for a video pitch!
          <br />
          <br />
          <LinkedPrompt>
            <br />
            <a
              href="https://drive.google.com/file/d/1xzUIfklnnnLkuympUVySEYWT6gcpb453/view?usp=sharing"
              rel="noreferrer"
              target="_blank">
              <LinkedBtn type="button">
                <img
                  src={LInkedIn}
                  alt="link to Cecilias Linked In" />
              </LinkedBtn>
            </a>
          </LinkedPrompt>
          </About>
        </AboutWrapper>
      </Wrapper>
    </Section>
  );
};

export default AboutSection;
