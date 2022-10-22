import React from 'react';
import { SectionHeading, InnerWrapper, OuterWrapper } from '../library/GlobalStyles'

export const TechSection = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>TECH</SectionHeading>
        <p>
            HTML, CSS, JavaScript, React
            , Node.js, mob-programming, pair-programming, Github
        </p>
      </InnerWrapper>
    </OuterWrapper>
  )
}