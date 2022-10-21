import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { API_TOKEN } from 'secret'
import { MainHeaders, InnerWrapper, TitleTertiary, TitleQuaternary, SingleTag } from './globalStyling'

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

  // Filtering my starred projects to make them the featured projects
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
            <Overlay>
              <FeaturedProjectsImg width="100%" src={`https://raw.githubusercontent.com/linneaajger/${project.name}/master/code/thumbnail/thumbnail.png`} alt="thumbnail of project" />
              <OverlayText>
                <h4>{project.name.replaceAll('-', ' ').replaceAll('project', '')}</h4>
              </OverlayText>
            </Overlay>

            <ProjectDescription>
              <TitleQuaternary>{project.name.replaceAll('-', ' ')}</TitleQuaternary>
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
        <TitleTertiary selectedColor="#2f694d" marginTop="10%">other projects</TitleTertiary>
        {OtherProjects.reverse().map((project) => (
          <ProjectCard key={project.id}>
            <StyledDescriptionLink href={project.homepage}>
              <ProjectDescription>
                <TitleQuaternary>{project.name}</TitleQuaternary>
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
export const Tags = styled.div`
    display: flex;
    margin: 0.5rem 0rem 0rem 0rem;
`
export const FeaturedProjectsImg = styled.img`
    width: ${(props) => (props.width)};
  `

export const Overlay = styled.div`
  position: relative;

  & :hover {
      opacity: 0;
    }
`
export const OverlayText = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    background-color: #484848a1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    transition: 0.3s ease-in-out;

  /* .Project__Overlay:hover .Project__OverlayText h4 {
    color: red;
  }

  .Project__Overlay:hover .ProjectOverlayText h4:hover {
    color: blue;
  } */

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: white;
    font-size: 1.8rem;
    text-transform: uppercase;
  }
`
// not hover 484848a1(63%). #484848