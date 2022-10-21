import styled from 'styled-components';
import React from 'react'
import { Section, SectionHeader } from 'components/Section'

export const Skills = () => {
  return (
    <Section primary>
      <SectionHeader>SKILLS</SectionHeader>
      <SkillsText>
        <p>
        Skills
        </p>
      </SkillsText>
    </Section>
  )
}

export default Skills;

const SkillsText = styled.p`
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin: 0px auto 30px;
    width: 320px;
`