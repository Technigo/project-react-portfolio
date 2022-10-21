import React from 'react'
import { SectionHeading } from './styled/Headings'
import { InnerWrapper, OuterWrapper } from './styled/Wrappers'
import { SkillsDiv } from './styled/SkillsList'

export const Skills = () => {
  return (
    <OuterWrapper id="other-skills">
      <InnerWrapper>
        <SectionHeading>SKILLS</SectionHeading>
        <SkillsDiv>
          <ul>
            <li>TOOLS</li>
            <li>APIs</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Linux</li>
            <li>Figma</li>
            <li>Slack</li>
          </ul>
          <ul>
            <li>OTHER</li>
            <li>Responsive design</li>
            <li>Agile development</li>
            <li>Mob programming</li>
            <li>Pair programming</li>
            <li>Code reviews</li>
            <li>Mob programming</li>
          </ul>
        </SkillsDiv>
      </InnerWrapper>
    </OuterWrapper>
  )
}