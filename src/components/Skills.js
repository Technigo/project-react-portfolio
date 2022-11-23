import React from 'react-dom'
import { Title, Section, WrapperRow, SecondTitleLeft, MainText } from '../styles/Main'
import { List } from '../styles/Skills'

const Skills = () => {
  return (
    <Section>
      <Title>Skills</Title>
      <WrapperRow>
        <List>
          <SecondTitleLeft>Code</SecondTitleLeft>
          <MainText>
            <li>HTML</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Github</li>
          </MainText>
        </List>
        <List>
          <SecondTitleLeft>Toolbox</SecondTitleLeft>
          <MainText>
            <li>Figma</li>
            <li>Keynote</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Slack</li>
          </MainText>
        </List>
        <List>
          <SecondTitleLeft>Upcomming</SecondTitleLeft>
          <MainText>
            <li>MondoDB</li>
            <li>Backend</li>
          </MainText>
        </List>
      </WrapperRow>
    </Section>
  );
}

export default Skills;