import React from 'react';
import styled from 'styled-components';
import { Section, SectionHeadlineBg, SectionHeadline } from 'StyledComponents/Section';

const SkillsContainer = styled.div`
display: grid; 
grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
flex-direction: row;
justify-content: space-evenly; 
gap: 30px; 
margin: 0px auto;
margin-bottom: 40px;

@media (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 15px;
  text-align: center;
}
`

const Code = styled.div`
flex-direction: column;
justify-content: center;
text-align: center;
grid-column-start: 2;
@media (max-width: 768px) {
  grid-column-start: 3;
  text-align: center;
}
`

const Toolbox = styled.div`
flex-direction: column;
justify-content: center;
text-align: center;
margin-right: 1.5rem;
grid-column-start: 3;
@media (max-width: 768px) {
  grid-column-start: 3;
  text-align: center;
}
`

const More = styled.div`
text-align: center;
justify-content: center;
margin-left: 0;
grid-column-start: 4;
@media (max-width: 768px) {
  grid-column-start: 3;
  text-align: center;
}
`

const Li = styled.p`
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
font-size: 18px;
@media (max-width: 768px) {
  justify-content: center;
  text-align: center;
}
`

const Headline = styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 20px;
text-transform: uppercase;
`

const UpcomingContainer = styled.div`
display: flex;
justify-content: center;
justify-content: space-evenly;

@media (max-width: 768px) {
  display: grid;
  grid-column-start: 3;
  text-align: center;
}
`

const Skills = () => {
  return (
    <Section first>
      <SectionHeadline><SectionHeadlineBg>SKILLS</SectionHeadlineBg></SectionHeadline>
      <SkillsContainer>
        <Code>
          <Headline>Code</Headline>
          <Li>HTML</Li>
          <Li>CSS</Li>
          <Li>JavaScript</Li>
          <Li>React</Li>
        </Code>
        <Toolbox>
          <Headline>Toolbox</Headline>
          <Li>VSCode</Li>
          <Li>Slack</Li>
          <Li>GitHub</Li>
          <Li>StackOverflow</Li>
          <Li>Figma</Li>
          <Li>Canva</Li>
        </Toolbox>
        <More>
          <Headline>More</Headline>
          <Li>Pair-programming</Li>
          <Li>Mob-programming</Li>
          <Li>Adobe Suite</Li>
          <Li>Customer experience</Li>
          <Li>Social media marketing experience</Li>
          <Li>Office management</Li>
        </More>
      </SkillsContainer>
      <UpcomingContainer>
        <Headline>Upcoming skills</Headline>
        <Li>Redux</Li>
        <Li>MongoDB</Li>
        <Li>Node.js</Li>
        <Li>React Native</Li>
      </UpcomingContainer>
    </Section>
  )
}

export default Skills;