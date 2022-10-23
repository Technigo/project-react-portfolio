import React from 'react'
import styled from 'styled-components/macro'
import { HeadH4, InnerWrapper, SectionWrapper, HeadWrapper } from './styles/MainStyle'

const Skills = () => {
  return (
    <SectionWrapper>
      <InnerWrapper>
        <HeadWrapper>
          <HeadH4>
            Skills
          </HeadH4>
        </HeadWrapper>
        <SkillsArticle>
          <SkillsCard>
            <SkillsHead>Code</SkillsHead>
            <ul>
              <li>React</li>
              <li>JavaScript ES6</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </SkillsCard>
          <SkillsCard>
            <SkillsHead>Toolbox</SkillsHead>
            <ul>
              <li>GitHub</li>
              <li>Slack</li>
              <li>Figma</li>
            </ul>
          </SkillsCard>
          <SkillsCard>
            <SkillsHead>More</SkillsHead>
            <ul>
              <li>Pair Programming</li>
              <li>Mob Programming</li>
              <li>Code Review</li>
            </ul>
          </SkillsCard>
          <SkillsCard>
            <SkillsHead>Upcoming</SkillsHead>
            <ul>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Agile Methodology</li>
            </ul>
          </SkillsCard>
        </SkillsArticle>
      </InnerWrapper>
    </SectionWrapper>
  )
}
export default Skills

const SkillsArticle = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
`
const SkillsCard = styled.div`
  width: 20%;
ul {
  list-style: none;
}
li {
  font-weight: 500;
  line-height: 4vh;
}
`
const SkillsHead = styled.p`
  font-weight: 700;
  color: #990000;
  margin: 0;
`
