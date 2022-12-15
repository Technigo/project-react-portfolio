import React, { useEffect, useState } from 'react';
import githubicon from '../icons/greengithub.png'
import { ProjectTitle, Programs, OtherProgramsWrapper, WrapOtherProject, OtherProjectsWrapper, Icon } from '../styles/Projects'
import { MainText, SecondTitle, Section } from '../styles/Main'

const Otherprojects = () => {
  const selectedprojects = ['project-auth', 'project-music-releases', 'project-mongo-api']

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
      <OtherProjectsWrapper>
        <SecondTitle>Other Projects</SecondTitle>
        {repos.map((repo) => {
          return (
            <div key={repo.id}>
              <WrapOtherProject>
                <a href={repo.homepage}>
                  <ProjectTitle>{repo.name.replace(/-/g, ' ')}</ProjectTitle>
                  </a>
                  <MainText>{repo.description}</MainText>
                  <OtherProgramsWrapper>
                    <a href={`https://github.com/Kristin-Larsson/${repo.name}`}><Icon src={githubicon} alt="github Icon" /></a>
                    <Programs>{repo.topics[0]}</Programs>
                    <Programs>{repo.topics[1]}</Programs>
                    <Programs>{repo.topics[2]}</Programs>
                  </OtherProgramsWrapper>
              </WrapOtherProject>
            </div>
          )
        })}
      </OtherProjectsWrapper>
    </Section>
  );
}

export default Otherprojects;
