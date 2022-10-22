import React, { useState } from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Heading, Topics, ProjectsHeading, ProjectsParagraph } from './Styling'

const GithubAPI = 'https://api.github.com/users/marwebdesign/repos'
// const options = {
//   method: 'GET',
//   headers: {
//     Authorization: 'token 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'
//   }
// }

export const OtherProjects = () => {
  const [otherProjects, setOtherProjects] = useState([''])
  fetch(GithubAPI)
    .then((res) => res.json())
    // .then((response) => console.log(response))
    // .then((data) => console.log(data))
    .then((data) => {
      setOtherProjects(data)
    })
  const SmallProjects = otherProjects.filter((secondProjects) => (secondProjects.name === 'project-music-releases') || (secondProjects.name === 'project-weather-app') || (secondProjects.name === 'project-news-site'));
  return (
    <OuterWrapper beige>
      <InnerWrapper>
        <OtherProjectsContent>
          <Heading>OTHER PROJECTS</Heading>
          <OtherProjectsContainer>
            {SmallProjects.map((prop) => (
              <div key={prop.id}>
                <OtherProjectLink href={prop.html_url} alt="Link to project" target="_blank">
                  <ProjectsHeading>{prop.name}</ProjectsHeading>
                  <ProjectsParagraph>{prop.description}</ProjectsParagraph>
                </OtherProjectLink>
                {prop.topics.map((tag) => (
                  <Topics>{tag}</Topics>
                ))}
              </div>
            ))}
          </OtherProjectsContainer>
        </OtherProjectsContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const OtherProjectsContent = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
/* align-items: center; */
/* text-align: center; */
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