/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import styled from 'styled-components/macro';
import { BlueTitle, InnerWrapperSection, OuterWrapperSection } from 'styles/ProjectStyles';

const SkillsSection = () => {
  const skills = [
    {
      name: 'CODE',
      tags: ['JavaScript ES6', 'React', 'Redux', 'HTML5', 'CSS3', 'GitHub', 'API:s']
    },
    {
      name: 'TOOLBOX',
      tags: ['Google Cloud', 'MongoDB', 'Photoshop', 'Illustrator', 'InDesign', 'AutoCad', 'Figma', 'Slack', ' Netlify']
    },
    {
      name: 'MORE',
      tags: ['Group Lead', 'Agile methodology']
    },
    {
      name: 'UPCOMING',
      tags: ['Node.js']
    }
  ]
  return (
    <OuterWrapperSection grey>
      <InnerWrapperSection>
        <BlueTitle
          tabIndex="0">
          SKILLS
        </BlueTitle>
        <SkillsWrapper>
          {skills.map((skill) => {
            return (
              <SkillsCard key={skill.name}>
                <SkillsInfo>
                  <SkillsParagraphStyle>
                    <div
                      tabIndex="0">
                      <h4>{skill.name}</h4>
                    </div>
                    {skill.tags.map((tag) => {
                      return (
                        <div
                          key={tag}
                          tabIndex="0">
                          <p>{tag}</p>
                        </div>
                      )
                    })}
                  </SkillsParagraphStyle>
                </SkillsInfo>
              </SkillsCard>
            )
          })}
        </SkillsWrapper>
      </InnerWrapperSection>
    </OuterWrapperSection>
  )
}
export default SkillsSection;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin: 5vh 0 5vh 0;
  text-align: center;
`
const SkillsCard = styled.div`
  width: 50%;
  margin-bottom: 3vh;
  @media (min-width: 1024px) {
    width: 33%;
  }
`

const SkillsInfo = styled.div`
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
`

const SkillsParagraphStyle = styled.div`
  & h4 {
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: #406882;
    background-color: #f4f4f4;
  }
  & p {
    margin: 0;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 17px;
    line-height: 30px;
    color: #000000;
  }
`