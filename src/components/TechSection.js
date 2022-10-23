import React from 'react';
import { SectionHeading, InnerWrapper, OuterWrapper, BodyText } from '../library/GlobalStyles'

export const TechSection = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>TECH</SectionHeading>
        <BodyText>
            HTML, CSS, JavaScript, React
            , Node.js, mob-programming, pair-programming, Github
        </BodyText>
      </InnerWrapper>
    </OuterWrapper>
  )
}