import React from 'react';
import styled from 'styled-components';
// import data from '../data.json'

const OtherProject = () => {
  return (
    <ProjectList>
      <StyledFeaturedProject>
        <StyledTextWrapper>
          <h4>Title</h4>
          <p>Description</p>
        </StyledTextWrapper>
        <StyledTagWrapper>
          Tags
        </StyledTagWrapper>
      </StyledFeaturedProject>
    </ProjectList>
  );
};

export default OtherProject;

const ProjectList = styled.div`
  border: 1px red solid;
`;

const StyledFeaturedProject = styled.div`
  border: 1px blue solid;
`;

const StyledTextWrapper = styled.div`
`;

const StyledTagWrapper = styled.div`
`;
