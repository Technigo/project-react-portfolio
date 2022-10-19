import React from 'react';
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper } from 'StyledComponents/GlobalStyles';
import { SubHeading } from 'StyledComponents/HeadlineStyles';

const OtherProjects = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SubHeading>OTHER PROJECTS</SubHeading>
        <ProjectHeading>Project 1</ProjectHeading>
        <OtherProjetsText>Project...<Arrow> arrow </Arrow></OtherProjetsText>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const ProjectHeading = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #aa658f;
   
`

const OtherProjetsText = styled.p`
    font-family: "Roboto";
    font-size: 17px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    
`

const Arrow = styled.span`
    color: #7c5f74;
    font-weight: 600;
`

export default OtherProjects;