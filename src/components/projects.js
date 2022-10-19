import React, { useState, useEffect } from 'react'
import { API_TOKEN } from 'secret'
import { MainHeaders, InnerWrapper, StyledH3, StyledH4 } from './globalStyling'

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

  useEffect(() => {
    FetchProjects()
  }, [])

  return (
    <InnerWrapper selectedColor="#578e8724">
      <MainHeaders>featured projects</MainHeaders>
      {FilteredProjects.map((item) => (
        <div key={item.id}>
          <StyledH4>{item.name}</StyledH4>
          <p>{item.html_url}</p>
        </div>
      ))}
      <div>
        <StyledH3 selectedColor="#2f694d" marginTop="10%">other projects</StyledH3>
      </div>
    </InnerWrapper>
  )
}

// <img src={`https://raw.githubusercontent.com/linneaajger/${item.name}/main/code/images/jack.svg`} alt="project" />

