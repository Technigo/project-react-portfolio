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
              <FeaturedProjectsContainer>
                <ProjectLink href={prop.html_url} alt="Link to project" target="_blank">
                  <ImageAndName>
                    <BigProjectsImage alt="project-img" src={`https://raw.githubusercontent.com/marwebdesign/${prop.name}/master/code/Thumbnail/thumbnail.png`} />
                    <ProjectNameOverImage>{prop.name}</ProjectNameOverImage>
                  </ImageAndName>
                </ProjectLink>
                <ProjectsHeading>{prop.name}</ProjectsHeading>
                <p>{prop.description}</p>
              </FeaturedProjectsContainer>
              {prop.topics.map((tag) => (
                <Topics>{tag}</Topics>
              ))}
            </div>
          ))}
        </FeaturedProjectsContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const FeaturedProjectsContent = styled.div`
display: grid;
grid-template-columns: 1fr;
/* display: flex;
flex-direction: column;
justify-content: flex-start; */
/* align-items: center; */
/* text-align: center; */
/* @media (min-width: 1025px) {
  grid-template-columns: repeat(2, 1fr);
} */
font-family:'Roboto', sans-serif;
line-height: 30px;

@media (min-width: 1025px) {
grid-template-columns: repeat(2, 1fr);
column-gap: 5%;
  }
`

export const FeaturedProjectsContainer = styled.div`
/* width: 100%; */
display: flex;
flex-direction: column;
/* @media (min-width: 1025px) {
  width: 40%;
  flex-direction: row;
  flex-wrap: wrap;
  } */

`

export const ImageAndName = styled.div`
position: relative;
`

export const BigProjectsImage = styled.img`
width: 100%;
border: 2px solid #D36B00;
border-radius: 10px;
opacity: 0.7;
&: hover {
  opacity: 1;
}
`

export const ProjectNameOverImage = styled.h2`
text-transform: uppercase;
position: absolute;
background-color: #D36B00;
padding: 0px 4px;
display: inline;
font-size: 22px;
border-radius: 5px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
&: hover {
  opacity: 1;
}
`

export const ProjectLink = styled.a`
color: white;
&: :visited {
color:white;
}
`

export const ProjectsHeading = styled.h4`
text-transform: uppercase;
color: #D36B00;
`

