import styled from 'styled-components'
import React, { useEffect, useState } from 'react';
import Global from './Global';
import weather from '../images/weatherapp.png'
import guesswho from '../images/guesswho.png'

const Projects = () => {
  const selectedprojects = ['project-chatbot', 'project-guess-who', 'project-survey', 'project-movies']
  const projectimg = [
    weather,
    guesswho
  ]

  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Kristin-Larsson/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.filter(({ fork, name }) => fork && selectedprojects.includes(name)))
        console.log(repos)
      })
  }, [])

  return (
    <FeaturedProjects>
      <Global>Featured Projects</Global>
      {repos.map((repo, index) => {
        console.log(index)
        return (
          <>
            <p key={repo.id}>{repo.name}</p>
            <img src={projectimg[0]} alt="project" />
          </>
        )
      })}
    </FeaturedProjects>
  );
}

const FeaturedProjects = styled.div`
border: 2px solid hotpink;
width: 100%;
margin: 0%;
display: flex;
flex-direction: column;
height: 1180px;
text-align: center;
align-items: center;
`

// const ProjectContainer = styled.div`
// border: 2px solid hotpink;
// display: flex;
// flex-direction: column;
// width: 80%;
// height: 100px;
// align-items: center;
// text-align: center;
// `
// const ProjectTitle = styled.h3`
// display: column;
// color: #677867;
// font-family: 'Montserrat';
// font-style: normal;
// font-weight: 700;
// font-size: 19px;
// text-align: center;
// align-items: center;
// justify-content: center;
// `

export default Projects;