import React, { useEffect, useState } from 'react';
import { ProjectTitle, Programs, ProgramsWrapper, Wrapper } from '../styles/Projects'
import { Section, MainText, SecondTitle } from '../styles/Main'

const Otherprojects = () => {
  const selectedprojects = ['project-chatbot', 'project-music-releases', 'project-business-site']

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
      <SecondTitle>Other Projects</SecondTitle>
      <Wrapper>
        {repos.map((repo, index) => {
          console.log(index)
          return (
            <div key={repo.id}>
              <ProjectTitle>{repo.name.replace(/-/g, ' ')}</ProjectTitle>
              <MainText>{repo.description}</MainText>
              <ProgramsWrapper>
                <Programs>{repo.topics[0]}</Programs>
                <Programs>{repo.topics[1]}</Programs>
                <Programs>{repo.topics[2]}</Programs>
              </ProgramsWrapper>
            </div>
          )
        })}
      </Wrapper>
    </Section>
  );
}

export default Otherprojects;
