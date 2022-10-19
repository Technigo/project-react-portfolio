import React from 'react';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';
import { InnerWrapper, OuterWrapper, P } from 'StyledComponents/GlobalStyles'

export const Tech = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>TECH</SectionHeading>
        <P>
        HTML, CSS, Flexbox, Bootstrap, JavaScript ES6, JSX, React, React Hooks, Redux, Node.js,
        Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
        </P>
      </InnerWrapper>
    </OuterWrapper>
  )
}
