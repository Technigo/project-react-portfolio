import React, { useEffect, useState } from 'react';
import { Title, MainText } from '../styles/Main'
import { SectionFeaturedProjects, WrapProject, Wrapper, ProjectImage, ProjectTitle, Programs, ProgramsWrapper, Overlay } from '../styles/Projects'
import weather from '../images/survey.png'
import guesswho from '../images/guesswho.png'

const Projects = () => {
  const selectedprojects = ['project-happy-thoughts', 'project-survey', 'project-guess-who', 'project-movies']
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
    <SectionFeaturedProjects>
      <Title>Featured Projects</Title>
      <Wrapper>
        {repos.map((repo, index) => {
          console.log(index)
          return (
            <div key={repo.id}>
              <WrapProject>
                <Overlay>
                  <ProjectImage src={projectimg[0]} alt="project" />
                </Overlay>
                <ProjectTitle>{repo.name.replace(/-/g, ' ')}</ProjectTitle>
                <MainText>{repo.description}</MainText>
                <ProgramsWrapper>
                  <Programs>{repo.topics[0]}</Programs>
                  <Programs>{repo.topics[1]}</Programs>
                  <Programs>{repo.topics[2]}</Programs>
                </ProgramsWrapper>
              </WrapProject>
            </div>
          )
        })}
      </Wrapper>
    </SectionFeaturedProjects>
  );
}

export default Projects;