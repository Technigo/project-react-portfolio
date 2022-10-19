/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { gitHubEndpoint } from '../utils/urls'
// import * as dotenv from 'dotenv'
import FeaturedProject from './FeaturedProject';
import OtherProject from './OtherProject';

// import { projectsForDisplay } from '../utils/projectsForDisplay' Can't import the named export 'projectsForDisplay'.'includes'
// (imported as 'projectsForDisplay') from default-exporting module (only default export is available)
import StyledProject from './Project.style';
import { GridWrapper, SubHeading } from './ReusableStyles.style'

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const featuredForDisplay = ['project-happy-thoughts', 'project-movies', 'project-music-releases', 'project-guess-who']
  const otherForDisplay = ['project-chatbot', 'project-news-site']
  useEffect(() => {
    fetch('https://api.github.com/users/ElinSegelov/repos')
      .then((data) => data.json())
      .then((fetchedRepos) => setRepos(fetchedRepos))
      .catch((error) => console.error(error))
  }, []);

  const featured = (repos.filter((repo) => featuredForDisplay.includes(repo.name)));
  const other = (repos.filter((repo) => otherForDisplay.includes(repo.name)));

  /*   const featuedOne = featured[0]
  const featuedTwo = featured[1]
  const featuedThree = featured[2]
  const featuedFour = featured[3] */

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
        projectImage="https://picsum.photos/200/300"
        projectTitle={repo.name}
        projectDescription={repo.description}
        techTags={repo.topics}
        repoLink={repo.html_url} />
    )
  })

  return (
    <StyledProjectSection className="featured-projects bg-darker show-off">
      <h2 className="grid-heading">Featured Projects</h2>
      <StyledGridWrapperProject className="grid-wrapper projects-wrapper">
        {allFeatured}
      </StyledGridWrapperProject>
      <StyledOtherWrapper className="other-wrapper">
        <SubHeading className="sub-heading">Other Projects</SubHeading>
        {allOther}
      </StyledOtherWrapper>
    </StyledProjectSection>
  )
}

export default Projects;

const StyledProjectSection = styled.section`
  background-color: var(--secondary);
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledOtherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 600px) {
    justify-content: left;
      width: 60vw;
      gap: 1.5rem;
  }
  
`
const StyledGridWrapperProject = styled.div`
  @media (min-width: 600px) {
    display: grid ;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    width: 90vw;
  }
  @media (min-width: 1200px) {
    width: 60vw;
  }
`