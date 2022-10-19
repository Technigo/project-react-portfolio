import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import FeaturedProjects from './FeaturedProjects'
import OtherProjects from './OtherProjects'

import { BASE_URL } from '../utils/urls'
import { H5Head, HeadH4, InnerWrapper } from './MainStyle'
import { H4Wrapper } from './Tech'

const FetchedInfo = () => {
  const [repos, setRepos] = useState([]);
  const featuredForDisplay = ['project-happy-thoughts', 'project-movies', 'project-music-releases', 'project-guess-who', 'project-weather-app', 'project-survey']
  const otherForDisplay = ['project-chatbot', 'project-portfolio', 'project-business-site', 'project-news-site']

  useEffect(() => {
    fetch(BASE_URL)
      .then((data) => data.json())
      .then((fetchedRepos) => setRepos(fetchedRepos))
      .catch((error) => console.error(error))
  }, []);

  const featured = (repos.filter((repo) => featuredForDisplay.includes(repo.name)));
  const other = (repos.filter((repo) => otherForDisplay.includes(repo.name)));

  const allFeatured = featured.map((repo) => {
    return (

      <FeaturedProjects
        key={repo.id}
        deployedLink={repo.homepage}
        projectImage="https://picsum.photos/200/300"
        projectTitle={repo.name}
        projectDescription={repo.description}
        techTags={repo.topics}
        repoLink={repo.html_url} />
    )
  })

  const allOther = other.map((repo) => {
    return (

      <OtherProjects
        key={repo.id}
        deployedLink={repo.homepage}
        projectTitle={repo.name}
        projectDescription={repo.description}
        techTags={repo.topics}
        repoLink={repo.html_url} />
    )
  })

  return (
    <ProjectSection>
      <InnerWrapper>
        <H4Wrapper>
          <HeadH4>Featured Projects</HeadH4>
        </H4Wrapper>
        <FeaturedWrapper>
          {allFeatured}
        </FeaturedWrapper>
        <div className="other-wrapper">
          <H5Head>Other Projects</H5Head>
          {allOther}
        </div>
      </InnerWrapper>
    </ProjectSection>
  )
}

export default FetchedInfo

export const ProjectSection = styled.section` 
  background-color: #f4f4f4;
  width: 100%;
  margin: 0;
  text-align: left;
  padding: 2rem 0;
  align-items: center;
`
export const FeaturedWrapper = styled.div`
    margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    flex-wrap: wrap;
`