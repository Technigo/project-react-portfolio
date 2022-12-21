import React from 'react';
import styled from 'styled-components';
import { Tag } from 'styles/MainStyles';
import data from '../featured-projects.json';

const ProjectCard = () => {
  return (
    <ProjectList>
      {data.map((item) => (
        <StyledProject key={item.title} href={item.netlify}>
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
        </StyledProject>
      ))}
    </ProjectList>
  );
};

export default ProjectCard;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  width: 100%;
`;

const StyledProject = styled.a`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border: 4px solid var(--color-black);
  color: var(--color-black);
  text-decoration: none;

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);

    span {
      border: 2px solid var(--color-white);
    }

    a {
      color: var(--color-white);
    }
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