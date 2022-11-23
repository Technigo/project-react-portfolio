import React from 'react';
import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const Projects = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <StyledParagraph>
          Hello, I am Linus.
        </StyledParagraph>
        <StyledParagraph>
          A Curious, and creative frontend developer
          based in Stockholm with a passion for
          design systems and visual design. I’m a
          team player by heart, a maker and maven
          who’s eager to build and learn new things.
        </StyledParagraph>
      </InnerWrapper>
    </OuterWrapper>
  );
};
export default Projects;

const StyledParagraph = styled.p`
  text-align: center;

  @media (min-width: 668px) {
      text-align: left;
    }
`;