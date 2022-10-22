import React, { useState } from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Heading, Topics, ProjectsHeading, ProjectsParagraph, TopicsContainer } from './Styling'

const GithubAPI = 'https://api.github.com/users/marwebdesign/repos'

export const OtherProjects = () => {
  const [otherProjects, setOtherProjects] = useState([''])
  fetch(GithubAPI)
    .then((res) => res.json())
    .then((data) => {
      setOtherProjects(data)
    })

  const SmallProjects = otherProjects.filter((secondProjects) => (secondProjects.name === 'project-music-releases') || (secondProjects.name === 'project-weather-app') || (secondProjects.name === 'project-news-site'));
  return (
    <OuterWrapper beige>
      <InnerWrapper>
        <OtherProjectsContent>
          <Heading>OTHER PROJECTS</Heading>
          {SmallProjects.map((prop) => (
            <OtherProjectsContainer key={prop.id}>
              <OtherProjectLink href={prop.html_url} alt="Link to project" target="_blank">
                <ProjectsHeading>{prop.name}</ProjectsHeading>
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

export const OtherProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family:'Roboto', sans-serif;
  line-height: 30px;
`
export const OtherProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7%;
`
export const OtherProjectLink = styled.a`
 &:link {
  color:black;
  text-decoration: none;
}
 &:visited {
  color:black;
  text-decoration: none;
}
 `