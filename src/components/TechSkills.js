/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import styled from 'styled-components/macro';

import { OuterWrapperSection, InnerWrapperSection, BlueTitle } from 'styles/ProjectStyles';

const TechSkills = () => {
  return (
    <OuterWrapperSection>
      <InnerWrapperSection>
        <BlueTitle tabIndex="0">
          TECH
        </BlueTitle>
        <CenteredP tabIndex="0">
          HTML, CSS, JavaScript ES6, React, API:s, mob-programming,
          pair-programming, GitHub.
        </CenteredP>
      </InnerWrapperSection>
    </OuterWrapperSection>
  )
}
export default TechSkills;

const CenteredP = styled.p`
  text-align:center;
`