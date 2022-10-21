import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper, Devices, MainHeader, MainSections, Title } from 'styles/mainStyles';

const Skills = () => {
  return (
    <MainSections coloredBackground>
      <InnerWrapper>
        <MainHeader>SKILLS</MainHeader>
        <Grid>
          <SkillsColumns>
            <SkillsTitel>CODE</SkillsTitel>
            <SkillsText>HTML5</SkillsText>
            <SkillsText>CSS3</SkillsText>
            <SkillsText>JavaScript ES6</SkillsText>
            <SkillsText>React</SkillsText>
            <SkillsText>Styled Components</SkillsText>
            <SkillsText>GitHub</SkillsText>
          </SkillsColumns>
          <SkillsColumns>
            <SkillsTitel>TOOLBOX</SkillsTitel>
            <SkillsText>Visual Studio Code</SkillsText>
            <SkillsText>Figma</SkillsText>
            <SkillsText>Postman</SkillsText>
            <SkillsText>Slack</SkillsText>
            <SkillsText>Avid Media Composer</SkillsText>
            <SkillsText>Adobe Premiere</SkillsText>
          </SkillsColumns>
          <SkillsColumns>
            <SkillsTitel>UPCOMING</SkillsTitel>
            <SkillsText>Redux</SkillsText>
            <SkillsText>Node.js</SkillsText>
          </SkillsColumns>
        </Grid>
      </InnerWrapper>
    </MainSections>
  )
}

export default Skills;

const SkillsTitel = styled(Title)`
  color: #D64819;
  font-weight: bold;
`

const SkillsText = styled.p`
  color: black;
  font-size: 16px;
  line-height: 30px;
  font-family: 'Roboto', sans-serif;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  text-align: center;    
  padding-top: 5%; 

  @media ${Devices.tablet} {
    display: grid;
    grid-template-columns: auto auto auto;
  }
`

const SkillsColumns = styled.div`

`
