import React from 'react';
import { Overlay, OverlayText, ProjectBox, ProjectDescription, ProjectTitle, ProjectWrap } from 'styledcomponents/Project';
import styled from 'styled-components/macro'
import Cecilia from '../images/Cecilia.jpeg'

const ProjectCard = () => {
  return (
    <ProjectWrap>
      <ProjectBox>
        <Overlay> <OverlayText>THE MOVIE PROJECT</OverlayText></Overlay>
        <ProjectBackground src={Cecilia} alt="cecilia" />
      </ProjectBox>
      <ProjectTitle>
              TITLE
      </ProjectTitle>
      <ProjectDescription> This is a description of a project</ProjectDescription>
    </ProjectWrap>
  );
};
export default ProjectCard;

const ProjectBackground = styled.img`
  width: 100%;
  height: 200px; 
  background: #002F33;
  display: flex;
  position: relative;
  margin: 0 auto;
  top: -100%;
  @media (min-width: 900px) {
    width: 367px;
    height: 240px;
  }
`;

