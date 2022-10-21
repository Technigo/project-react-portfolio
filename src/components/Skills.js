import React from 'react-dom'
import { Title, Section, WrapperRow, SecondTitle, MainText } from '../styles/Main'
import { List } from '../styles/Skills'

const Skills = () => {
  return (
    <Section>
      <Title>Skills</Title>
      <WrapperRow>
        <List>
          <SecondTitle>Code</SecondTitle>
          <MainText>
            <li>HTML</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Github</li>
          </MainText>
        </List>
        <List>
          <SecondTitle>Toolbox</SecondTitle>
          <MainText>
            <li>Figma</li>
            <li>Keynote</li>
            <li>Photoshop</li>
            <li>illustrator</li>
            <li>Slack</li>
          </MainText>
        </List>
        <List>
          <SecondTitle>Upcomming</SecondTitle>
          <MainText>
            <li>Redux</li>
            <li>Backend</li>
          </MainText>
        </List>
      </WrapperRow>
    </Section>
  );
}

export default Skills;