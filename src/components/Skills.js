import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SiteSection, SectionTitle } from './global/GlobalStyling';

export const Skills = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SiteSection>
          <SectionTitle>
            <p>Skills</p>
          </SectionTitle>
          <SkillsParent>
            <SkillsChild>
              <h3>Code</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Jsx</p>
              <p>React</p>
              <p>Redux</p>
              <p>PHP</p>
            </SkillsChild>
            <SkillsChild>
              <h3>Toolbox</h3>
              <p>Figma</p>
              <p>Slack</p>
              <p>Notion</p>
              <p>VSCode</p>
              <p>Sublime text</p>
              <p>PHPStorm</p>
              <p>MYSQL</p>
            </SkillsChild>
            <SkillsChild>
              <h3>More</h3>
              <p>Requirements</p>
              <p>Product business owner</p>
              <p>Wordpress</p>
            </SkillsChild>
            <SkillsChild>
              <h3>Upcoming</h3>
              <p>Node.js</p>
            </SkillsChild>
          </SkillsParent>
        </SiteSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const SkillsParent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`
const SkillsChild = styled.div`
  width: 150px;
`
