import React from 'react';
import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const Tech = () => {
  return (
    <OuterWrapper className="background">
      <InnerWrapper>
        <h2>Tech</h2>
        <StyledParagraph>
          Javascript, React, Redux, NodeJS, MongoDB, React Native, Express, and RESTful APIs
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