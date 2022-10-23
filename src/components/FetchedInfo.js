/* eslint-disable newline-per-chained-call */
import React, { useState, useEffect } from 'react'

import FeaturedProjects, { FeaturedMedia } from './FeaturedProjects'
import OtherProjects, { OtherWrapper } from './OtherProjects'

import { BASE_URL, APIKey } from '../utils/urls'
import { ClonedSectionWrapper, InnerWrapper, HeadH4, H5Head, SectionWrapper, HeadWrapper } from './styles/MainStyle'

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
    const imageLink = `https://raw.githubusercontent.com/${APIKey}/${repo.name}/${repo.default_branch}/code/src/assets/featured-image.webp`
    return (

      <FeaturedProjects
        key={repo.id}
        deployedLink={repo.homepage}
        projectImage={imageLink}
        projectTitle={repo.name.replace(/project-/, '').replace(/-/, ' ').replace(/ app/, '').concat(' app').toUpperCase()}
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
        projectTitle={repo.name.replace(/project-/, '').replace(/-/, ' ').replace(/ app/, '').toUpperCase()}
        projectDescription={repo.description}
        techTags={repo.topics}
        repoLink={repo.html_url} />
    )
  })

  return (
    <>
      <ClonedSectionWrapper>
        <InnerWrapper>
          <HeadWrapper>
            <HeadH4>Featured Projects</HeadH4>
          </HeadWrapper>
          <FeaturedMedia>
            {allFeatured}
          </FeaturedMedia>
        </InnerWrapper>
      </ClonedSectionWrapper>
      <SectionWrapper>
        <InnerWrapper>
          <HeadWrapper>
            <H5Head>Other Projects</H5Head>
          </HeadWrapper>
          <OtherWrapper>
            {allOther}
          </OtherWrapper>
        </InnerWrapper>
      </SectionWrapper>
    </>
  )
}

export default FetchedInfo
