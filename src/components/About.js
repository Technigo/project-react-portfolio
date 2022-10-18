import React from 'react';
import { Section, SectionText } from 'StyledComponents/Section';
import { Line, Circle, LineCircle } from 'StyledComponents/LineCircle';
import { FlexWrapper } from 'StyledComponents/Flex';

const About = () => {
  return (
    <FlexWrapper>
      <Section first>
        <LineCircle>
          <Line /><Circle />
        </LineCircle>
        <SectionText>
        Hello! My name is Hanna, and I am an aspiring front-end developer.
        I also have a bachelors degree in Strategic Communication from Lund University.
        I love digital design, being creative as well as the logical sides that come with
        programming. I am passionate about everything that has to do with dogs,
        jokes and making things for other people to enjoy.
        </SectionText>
      </Section>
    </FlexWrapper>
  )
}

export default About;