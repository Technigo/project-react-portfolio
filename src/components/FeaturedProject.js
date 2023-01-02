import React from 'react';
import styled from 'styled-components';
import { Tag } from 'styles/MainStyles';
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
            <img src={item.image} alt="Project poster" />
          </a>
          <StyledTextWrapper>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </StyledTextWrapper>
          <StyledTagWrapper>
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </StyledTagWrapper>
          <StyledLink
            href={item.github}
            alt="Project Github"
            target="_blank"
            rel="noopener noreferrer">
            View on Github
          </StyledLink>
        </StyledFeaturedProject>
      ))}
    </ProjectList>
  );
};

export default FeaturedProject;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 668px) {
    flex-direction: row;
    }
`;

const StyledFeaturedProject = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

const StyledTextWrapper = styled.div`
`;

const StyledTagWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledLink = styled.a`
  position: relative;
  font-weight: 400;
  color: var(--color-black);
  font-size: 1rem;
`;

