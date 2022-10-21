import React from 'react-dom'
import { Line, Dot } from '../styles/Intro'
import { Section, Wrapper, MainText } from '../styles/Main'

const Intro = () => {
  return (
    <Section>
      <Wrapper>
        <MainText> <Line /><Dot />I am a driven and ambitious frontend developer.
        Previously my career has been spent in fashion design as a product developer.
        Since the summer of 2022 I am on a path leading to a new career,
        currently studying frontend development.
        </MainText>
      </Wrapper>
    </Section>
  );
}

export default Intro;