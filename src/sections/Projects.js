import React from 'react';
import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';
import FeaturedProject from 'components/FeaturedProject';
import OtherProject from 'components/OtherProject';

const Projects = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <h2>Featured projects</h2>
        <ProjectWrapper>
          <FeaturedProject />
        </ProjectWrapper>
        <h3>Other projects</h3>
        <ProjectWrapper>
          <OtherProject />
        </ProjectWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};
export default Projects;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 72px;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 668px) {
    
    }
`;