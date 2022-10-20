import React, { useState } from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Heading, Topics } from './Styling'

const GithubAPI = 'https://api.github.com/users/marwebdesign/repos'
// const options = {
//   method: 'GET',
//   headers: {
//     Authorization: 'token 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'
//   }
// }

export const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([''])
  fetch(GithubAPI)
    .then((res) => res.json())
    // .then((response) => console.log(response))
    // .then((data) => console.log(data))
    .then((data) => {
      setFeaturedProjects(data)
    })
  const BigProjects = featuredProjects.filter((firstProjects) => (firstProjects.name === 'project-movies') || (firstProjects.name === 'project-survey'));
  return (
    <OuterWrapper beige>
      <Heading dark>FEATURED PROJECTS</Heading>
      <InnerWrapper>
        <FeaturedProjectsContent>
          {BigProjects.map((prop) => (
            <div key={prop.id}>
              <BigProjectsImage alt="project-img" src={`https://raw.githubusercontent.com/marwebdesign/${prop.name}/master/code/Thumbnail/thumbnail.png`} />
              <ProjectsHeading>{prop.name}</ProjectsHeading>
              <p>{prop.description}</p>
              <Topics>{prop.topics}</Topics>
              {/* <p>{prop.html_url}</p> */}
            </div>
          ))}
        </FeaturedProjectsContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const FeaturedProjectsContent = styled.div`
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
export const BigProjectsImage = styled.img`
width: 100%;
border: 2px solid #D36B00;
border-radius: 10px;
`

