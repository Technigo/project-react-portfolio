import React from 'react';
import { InnerWrapper, OuterWrapper } from 'StyledComponents/GlobalStyles';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';

const More = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeading>FOR MORE</SectionHeading>
            LinkedIn, Github, StackOverflow
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default More;