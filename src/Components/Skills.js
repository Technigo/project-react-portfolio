import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper } from '../Styled components/GlobalStyles'
import { WhitePinkH2, SkillHeader } from '../Styled components/HeadlineStyles'

const Skills = () => {
  return (
    <OuterWrapper gray>
      <InnerWrapper>
        <WhitePinkH2>SKILLS</WhitePinkH2>
        <SkillSection>
          <div>
            <SkillHeader>CODE</SkillHeader>
            <Ul>
              <Li>Html</Li>
              <Li>Css</Li>
              <Li>JavaScript</Li>
              <Li>Github</Li>
              <Li>React</Li>
            </Ul>
          </div>
          <div>
            <SkillHeader>UPCOMING</SkillHeader>
            <Ul>
              <Li>Redux</Li>
              <Li>Phyton</Li>
            </Ul>
          </div>
          <div>
            <SkillHeader>TOOLBOX</SkillHeader>
            <Ul>
              <Li>Slack</Li>
              <Li>Figjam</Li>
              <Li>Mob-programming</Li>
              <Li>Pair-programming</Li>
              <Li>Sandbox</Li>
              <Li>Codewars</Li>
              <Li>Code pen</Li>
            </Ul>
          </div>
        </SkillSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Skills

const SkillSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 6vh;
  height: 40vh;
  flex-wrap: wrap;
`
const Li = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 29px; 
  text-align: center;
`

const Ul = styled.ul`
  list-style-type: none;
`