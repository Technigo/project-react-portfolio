import React, { useEffect, useState } from 'react';
import { ProjectTitle, Programs, ProgramsWrapper, WrapProject } from '../styles/Projects'
import { MainText, SecondTitle, Section, Wrapper } from '../styles/Main'

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
      <Wrapper>
        <SecondTitle>Other Projects</SecondTitle>
        {repos.map((repo) => {
          return (
            <div key={repo.id}>
              <WrapProject>
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
    </Section>
  );
}

export default Otherprojects;
