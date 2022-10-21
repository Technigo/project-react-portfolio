/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from 'react'
import { TagContainer, Tag } from 'Styled components/TagStyles'
import { OuterWrapper, InnerWrapper, P, A } from '../Styled components/GlobalStyles'
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
          <div key={project.id}>
            <PinkH3>{project.name.replaceAll('-', ' ').toUpperCase()}</PinkH3>
            <A href={project.html_url}>
              <P>{project.description}</P>
            </A>
            <TagContainer>{project.topics.map((topic) => <Tag>{topic}</Tag>)}
            </TagContainer>
          </div>)}
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default OtherProjects