import React, { useState } from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Heading, Topics } from './Styling'

const GithubAPI = 'https://api.github.com/users/marwebdesign/repos'

export const OtherProjects = () => {
  const [otherProjects, setOtherProjects] = useState([''])
  fetch(GithubAPI)
    .then((res) => res.json())
    // .then((response) => console.log(response))
    // .then((data) => console.log(data))
    .then((data) => {
      setOtherProjects(data)
    })
  const SmallProjects = otherProjects.filter((secondProjects) => (secondProjects.name === 'project-chatbot') || (secondProjects.name === 'project-weather-app'));
  return (
    <OuterWrapper beige>
      <InnerWrapper>
        <OtherProjectsContent>
          <Heading>OTHER PROJECTS</Heading>
          {SmallProjects.map((prop) => (
            <div key={prop.id}>
              <ProjectsHeading>{prop.name}</ProjectsHeading>
              <p>{prop.description}</p>
              {prop.topics.map((tag) => (
                <Topics>{tag}</Topics>
              ))}
              {/* <p>{prop.html_url}</p> */}
            </div>
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
/* align-items: center; */
/* text-align: center; */
font-family:'Roboto', sans-serif;
line-height: 30px;
`

export const ProjectsHeading = styled.h4`
color: #D36B00;
`
