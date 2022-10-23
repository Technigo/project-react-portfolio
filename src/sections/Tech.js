import React from 'react';
import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const Tech = () => {
  return (
    <OuterWrapper className="background">
      <InnerWrapper>
        <h2>Tech</h2>
        <StyledParagraph>HTML, CSS, Flexbox, JavaScript, Web Accessibly,
          API:s, mob-programming, pair-programming, Github
        </StyledParagraph>
      </InnerWrapper>
    </OuterWrapper>
  );
};
export default Tech;

const StyledParagraph = styled.p`
  text-align: center;

  @media (min-width: 668px) {
      text-align: left;
    }
`;