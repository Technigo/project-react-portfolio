/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import FeaturedProject from './FeaturedProject';
import OtherProject from './OtherProject';
import { GridWrapper, SubHeading, StyledOther } from './ReusableStyles.style';
import { featuredForDisplay, otherForDisplay } from '../utils/projectsForDisplay'

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ElinSegelov/repos')
      .then((data) => data.json())
      .then((fetchedRepos) => setRepos(fetchedRepos))
      .catch((error) => console.error(error))
  }, []);

  const featured = (repos.filter((repo) => featuredForDisplay.includes(repo.name)));
  const other = (repos.filter((repo) => otherForDisplay.includes(repo.name)));

  const allFeatured = featured.map((repo) => {
    return (
      <FeaturedProject
        key={repo.id}
        deployedLink={repo.homepage}
        defaultBranch={repo.default_branch}
        projectTitle={repo.name}
        projectDescription={repo.description}
        techTags={repo.topics}
        repoLink={repo.html_url} />
    )
  })

  const allOther = other.map((repo) => {
    return (
      <OtherProject
        key={repo.id}
        deployedLink={repo.homepage}
        defaultBranch={repo.default_branch}
        projectTitle={repo.name}
        projectDescription={repo.description}
        techTags={repo.topics}
        repoLink={repo.html_url} />
    )
  })

  return (
    <StyledProjectSection>
      <h2>Featured Projects</h2>
      <GridWrapper>
        {allFeatured}
      </GridWrapper>
      <StyledOther>
        <SubHeading>Other Projects</SubHeading>
        {allOther}
      </StyledOther>
    </StyledProjectSection>
  )
}

export default Projects;

const StyledProjectSection = styled.section`
  background-color: var(--secondary);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-self: center;
`
const StyledOtherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  
  @media (min-width: 600px) {
    justify-content: left;
    width: 80vw;
    gap: 1.5rem;
  }
  @media (min-width: 900px) {
    width: 60vw;
  }
  `