import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, P } from '../Styled components/GlobalStyles'
import { WhitePinkH2, PinkH3 } from '../Styled components/HeadlineStyles'

const GitHubAPI = 'https://api.github.com/users/jessikalind/repos'

const OtherProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(GitHubAPI)
      .then((res) => res.json())
      .then((data) => setProjects(data))
  })

  const filteredProjects = projects.filter((project) => project.name !== 'project-business-site')

  return (
    <OuterWrapper gray>
      <InnerWrapper>
        <WhitePinkH2>OTHER PROJECTS</WhitePinkH2>
        {filteredProjects.map((project) =>
          <div>
            <PinkH3>{project.name}</PinkH3>
            <P>{project.html_url}</P>
            <P>{project.description}</P>
            <TagContainer>{project.topics.map((topic) =>
              <Tag>{topic}</Tag>
            )}
            </TagContainer>
          </div>
        )}
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default OtherProjects

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1vw;
  padding-top: 20px;
`
const Tag = styled.div`
  background-color:#FDDFE7;
  color: black;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 11px;
  padding: 7px; 
`