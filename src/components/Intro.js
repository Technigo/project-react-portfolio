import React from 'react-dom'
import { Line, Dot } from '../styles/Intro'
import { Section, Wrapper, MainText } from '../styles/Main'

const Intro = () => {
  return (
    <Section>
      <Wrapper>
        <MainText> <Line /><Dot />I'm a solution oriented frontend developer with a background in design and product development.
        I'm eager to learn and have a passion for writing clean and reusable code. From my previous work I bring with me great 
        communication skills, problem-solving abilities and an eye for details. My goal is to soon be working in a fun team as 
        a frontend developer where I can continue to grow my newfound passion for writing code.
        </MainText>
      </Wrapper>
    </Section>
  );
}

export default Intro;