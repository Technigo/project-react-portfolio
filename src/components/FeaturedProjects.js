import React, { useEffect, useState } from 'react';
import { Title, MainText, Section } from '../styles/Main'
import { WrapProject, Wrapper, ProjectImage, ProjectTitle, Programs, ProgramsWrapper, Overlay } from '../styles/Projects'

const FeaturedProjects = () => {
  const selectedprojects = ['project-happy-thoughts', 'project-survey', 'project-guess-who', 'project-movies']

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
    <Section>
      <Title>Featured Projects</Title>
      <Wrapper>
        {repos.map((repo, index) => {
          console.log(index)
          return (
            <div key={repo.id}>
              <WrapProject>
                <Overlay><p> {repo.name.replace(/-/g, ' ')} </p></Overlay>
                <a href={`https://github.com/Kristin-Larsson/${repo.name}`}>
                  <ProjectImage src={`https://raw.githubusercontent.com/Kristin-Larsson/${repo.name}/master/code/portfolio.jpg`} alt="project" />
                  <ProjectTitle>{repo.name.replace(/-/g, ' ')}</ProjectTitle>
                  <MainText>{repo.description}</MainText>
                </a>
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
    </Section>
  );
}

export default FeaturedProjects;