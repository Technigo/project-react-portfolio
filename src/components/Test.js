import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SectionTitle } from './global/GlobalStyling';

export const Projects = () => {
  const ProjectsSection = styled.div`
    text-align: center;
    padding: 50px 0;
  `
  const [repos, setRepos] = useState([])

  const fetchData = () => {
    fetch('https://api.github.com/users/agadman/repos')
      .then((data) => data.json())
      .then((transformedData) => setRepos(transformedData))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <OuterWrapper background>
      <InnerWrapper>
        <ProjectsSection>
          <SectionTitle>
            <p>Featured projects</p>
          </SectionTitle>
          {repos.map((repo) => {
            return (
              <p key={repo.id}>{repo.name}</p>
            )
          })}
        </ProjectsSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}