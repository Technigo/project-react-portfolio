import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { API_TOKEN } from 'secret'
import { MainHeaders, InnerWrapper, StyledH3, StyledH4, FeaturedProjectsImg } from './globalStyling'

export const Projects = () => {
  const [projectsList, setProjectsList] = useState([])

  const FetchProjects = () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: { API_TOKEN }
      }
    }

    fetch('https://api.github.com/users/linneaajger/repos', options) // options object is passed as 2nd argument to fetch() function.
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProjectsList(data)
      })
  }
  // To filter the array of projects and remove the 2 projects with portfolio (index 6-7).
  // Will need to update this if the index changes with new projects.
  const FilteredProjects = projectsList.filter((item) => item.name.includes('project-'));
  FilteredProjects.splice(6, 2);

  const FeaturedProjects = FilteredProjects.filter((project) => project.stargazers_count !== 0)

  const OtherProjects = FilteredProjects.filter((project) => project.stargazers_count === 0)

  useEffect(() => {
    FetchProjects()
  }, [])

  return (
    <InnerWrapper selectedColor="#578e8724">
      <MainHeaders>featured projects</MainHeaders>
      {FeaturedProjects.map((project) => (
        <ProjectCard key={project.id}>
          <StyledDescriptionLink href={project.homepage}>
            <FeaturedProjectsImg width="100%" borderRadius="5px" src={`https://raw.githubusercontent.com/linneaajger/${project.name}/master/code/thumbnail/thumbnail.png`} alt="thumbnail of project" />
            <ProjectDescription>
              <StyledH4>{project.name.replaceAll('-', ' ')}</StyledH4>
              <p>{project.description}</p>
            </ProjectDescription>
          </StyledDescriptionLink>
          <StyledLink href={project.html_url}>👉 Github</StyledLink>

          <Tags>
            {project.topics.map((tag) => <SingleTag>{tag}</SingleTag>)}
          </Tags>
        </ProjectCard>
      ))}

      <div>
        <StyledH3 selectedColor="#2f694d" marginTop="10%">other projects</StyledH3>
        {OtherProjects.reverse().map((project) => (
          <ProjectCard key={project.id}>
            <StyledDescriptionLink href={project.homepage}>
              <ProjectDescription>
                <StyledH4>{project.name}</StyledH4>
                <p>{project.description} <span> &gt;&gt;</span></p>
              </ProjectDescription>
            </StyledDescriptionLink>
            <StyledLink href={project.html_url}>👉 Github</StyledLink>

            <Tags>
              {project.topics.map((tag) => <SingleTag>{tag}</SingleTag>)}
            </Tags>
          </ProjectCard>
        ))}
      </div>
    </InnerWrapper>
  )
}

export const ProjectCard = styled.div`
  padding: 20px 0px;
`

export const StyledDescriptionLink = styled.a`
  text-decoration: none;
  color: black;
`

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color:#2f694d;
`

export const ProjectDescription = styled.div`
margin: 1rem 0rem 0.5rem 0rem;

a{
  text-decoration: none;
}

span {
  color:#2f694d;
  font-weight: 700;
}
`

export const SingleTag = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;
    line-height: 0.9rem;
    background-color: #ffc15c7a;
    margin: 3px;
    padding: 3px 8px;
    border-radius: 2px;
`

export const Tags = styled.div`
  display: flex;
  margin: 0.5rem 0rem 0rem 0rem;

`
