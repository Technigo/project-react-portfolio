import React from 'react';
import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';
import ProjectCard from 'components/ProjectCard';

const Projects = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <h2>Projects</h2>
        <ProjectWrapper>
          <ProjectCard />
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
  width: 100%;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 668px) {
    
    }
`;