import React from 'react';
import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const Projects = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <h2>Featured projects</h2>
        <StyledWrapper>
          <p>Projects goes here</p>
        </StyledWrapper>
        <h3>Other projects</h3>
        <StyledWrapper>
          <p>Projects goes here</p>
        </StyledWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};
export default Projects;

const StyledWrapper = styled.div`

`;