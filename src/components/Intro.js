import React from 'react-dom'
import { Line, Dot } from '../styles/Intro'
import { Section, Wrapper, MainText } from '../styles/Main'

const Intro = () => {
  return (
    <Section>
      <Wrapper>
        <MainText> <Line /><Dot />I am a creative and problem-solver studying to become
        a frontend developer. Previously my career has been spent in fashion design as a
        product developer.
        </MainText>
      </Wrapper>
    </Section>
  );
}

export default Intro;