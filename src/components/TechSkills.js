/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import styled from 'styled-components/macro';

import { OuterWrapperSection, InnerWrapperSection, BlueTitle, TagWrapper } from 'styles/ProjectStyles';

const TechSkills = () => {
  const skillTags = [
    'HTML',
    'CSS',
    'JavaScript ES6',
    'React',
    'API:s',
    'GitHub',
    'mob-programming',
    'pair-programming'
  ]

  return (
    <OuterWrapperSection>
      <InnerWrapperSection>
        <BlueTitle tabIndex="0">
          TECH
        </BlueTitle>
        <Centered tabIndex="0">
          <TagWrapper center margin>
            {skillTags.map((skill) => {
              return (
                <h5 key={skill}>{skill}</h5>
              )
            })}
          </TagWrapper>
        </Centered>
      </InnerWrapperSection>
    </OuterWrapperSection>
  )
}
export default TechSkills;

const Centered = styled.h5`
  display: flex;
  align-items: center;
  text-align: center;
`