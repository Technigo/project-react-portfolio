import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  OuterWrapper,
  InnerWrapper,
  Heading,
  Topics,
  ProjectsHeading,
  ProjectsParagraph,
  TopicsContainer
} from './Styling'

const GithubAPI = 'https://api.github.com/users/marwebdesign/repos'

export const OtherProjects = () => {
  const [otherProjects, setOtherProjects] = useState([''])

  useEffect(() => {
    fetch(GithubAPI)
      .then((res) => res.json())
      .then((data) => {
        setOtherProjects(data)
      })
  }, [])

  const SmallProjects = otherProjects.filter((secondProjects) => (secondProjects.name === 'project-happy-thoughts-api') || (secondProjects.name === 'project-mongo-api') || (secondProjects.name === 'project-music-releases') || (secondProjects.name === 'project-chatbot') || (secondProjects.name === 'project-auth') || (secondProjects.name === 'project-weather-app') || (secondProjects.name === 'project-news-site') || (secondProjects.name === 'project-survey') || (secondProjects.name === 'project-chatbot') || (secondProjects.name === 'project-guess-who'));
  return (
    <OuterWrapper>
      <InnerWrapper>
        <OtherProjectsContent>
          <Heading>OTHER PROJECTS</Heading>
          {SmallProjects.map((prop) => (
            <OtherProjectsContainer key={prop.id}>
              <OtherProjectLink href={prop.homepage} alt="Link to project" target="_blank">
                <ProjectsHeading>{prop.name.replace(/-/g, ' ').toUpperCase()}</ProjectsHeading>
              </OtherProjectLink>
              <OtherProjectLink href={prop.html_url} alt="Link to project" target="_blank">
                <ProjectsParagraph>{prop.description}</ProjectsParagraph>
              </OtherProjectLink>
              <TopicsContainer>
                {prop.topics.map((tag) => (
                  <Topics>{tag}</Topics>
                ))}
              </TopicsContainer>
            </OtherProjectsContainer>
          ))}
        </OtherProjectsContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const OtherProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family:'Roboto', sans-serif;
  line-height: 30px;
`
const OtherProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
`
const OtherProjectLink = styled.a`
 &:link {
  color:black;
  text-decoration: none;
}
 &:visited {
  color:black;
  text-decoration: none;
}
 `