import React from 'react';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';
import { InnerWrapper, OuterWrapper, P } from 'StyledComponents/GlobalStyles'

export const Tech = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>TECH</SectionHeading>
        <P>
        HTML, CSS, Flexbox, JavaScript ES6, React, Redux, Node.js,
        MongoDB & Mongoose, Web Accessibly, API:s, mob-programming, pair-programming, Github,
        Agile Methodologies
        </P>
      </InnerWrapper>
    </OuterWrapper>
  )
}
