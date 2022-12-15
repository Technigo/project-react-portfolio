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
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML</li>
            <li>CSS</li>
          </MainText>
        </List>
        <List>
          <SecondTitleLeft>Code</SecondTitleLeft>
          <MainText>
            <li>MondoDB</li>
            <li>Node.js</li>
            <li>Styled components</li>
          </MainText>
        </List>
        <List>
          <SecondTitleLeft>Upcomming</SecondTitleLeft>
          <MainText>
            <li>Figma</li>
            <li>Slack</li>
            <li>Github</li>
            <li>VScode</li>
            <li>Postman</li>
            <li>Adobe photoshop</li>
            <li>Adobe illustrator</li>
          </MainText>
        </List>
      </WrapperRow>
    </Section>
  );
}

export default Skills;