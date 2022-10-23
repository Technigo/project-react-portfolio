import React from 'react';
import styled from 'styled-components';
import { Tag } from 'styles/MainStyles';
import data from '../other-projects.json';

const OtherProject = () => {
  return (
    <ProjectList>
      {data.map((item) => (
        <StyledOtherProject key={item.title} href={item.netlify}>
          <StyledTextWrapper>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </StyledTextWrapper>
          <StyledTagWrapper>
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </StyledTagWrapper>
        </StyledOtherProject>
      ))}
    </ProjectList>
  );
};

export default OtherProject;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
`;

const StyledOtherProject = styled.a`
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
  }
`;

const StyledTextWrapper = styled.div`
`;

const StyledTagWrapper = styled.div`
  display: flex;
  gap: 16px;
`;