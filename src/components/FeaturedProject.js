import React from 'react';
import styled from 'styled-components';
import { Button } from 'styles/MainStyles';
import data from '../featured-projects.json';

const FeaturedProject = () => {
  return (
    <ProjectList>
      {data.map((item) => (
        <StyledFeaturedProject key={item.title}>
          <a
            href={item.netlify}
            alt="project landingpage"
            target="_blank"
            rel="noopener noreferrer">
            <img src={item.image} alt="project poster" />
          </a>
          <StyledTextWrapper>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </StyledTextWrapper>
          <StyledTagWrapper>
          Tags
          </StyledTagWrapper>
          <Button>
            <a
              href={item.github}
              alt="project github"
              target="_blank"
              rel="noopener noreferrer">View on Github
            </a>
          </Button>

        </StyledFeaturedProject>
      ))}
    </ProjectList>
  );
};

export default FeaturedProject;

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

