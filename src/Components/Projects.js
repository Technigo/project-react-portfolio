import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './Shared/ContentWrapper';
import TitleButtonStyle from './Shared/TitleButton';
// import TypeBox from './Shared/TypeBox';
import ProjectCard from './Shared/ProjectCard';

const ProjectStyle = styled.div`
  background-color: var(--secondBackground); 
  border: solid 2px red;
  // display: row;
  // justify-content: center;
  // padding: 10px 0 40px 0;
  // font-family: Montserrat, sans-serif;
  // font-weight: 400;
  // text-align: center;

  .project-box{
    // padding: 30px 0 20px 0;
    display: grid;
    gap: 50px;
  }
`

const Projects = () => {
  return (
    <ContentWrapper as="section">
      <ProjectStyle>
        <TitleButtonStyle />
        <div className="project-box">
          <ProjectCard />
        </div>
      </ProjectStyle>
    </ContentWrapper>
  );
};
export default Projects;