import React from 'react';
import { SectionHeading, InnerWrapper, OuterWrapperGrey } from '../library/GlobalStyles'

export const TechSection = () => {
  return (
    <OuterWrapperGrey>
      <InnerWrapper>
        <SectionHeading>TECH</SectionHeading>
        <p>
            HTML, CSS, JavaScript, React
            , Node.js, mob-programming, pair-programming, Github
        </p>
      </InnerWrapper>
    </OuterWrapperGrey>
  )
}