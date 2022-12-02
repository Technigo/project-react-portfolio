/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from 'react'
import { TagContainer, Tag } from 'Styled components/TagStyles'
import { OuterWrapper, InnerWrapper, P, A, ReadMoreArrow } from '../Styled components/GlobalStyles'
import { WhitePinkH2, PinkH3 } from '../Styled components/HeadlineStyles'

const GitHubAPI = 'https://api.github.com/users/jessikalind/repos'

const OtherProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(GitHubAPI)
      .then((res) => res.json())
      .then((data) => setProjects(data))
  })

  // A filter to make sure to include only projects with 'project-' in the title,
  // and exclude projects with 'portfolio' and 'business-site' in the title
  // + projects included in Featured projects.
  const filteredProjects = projects.filter((project) => project.name.includes('project-') && !project.name.includes('portfolio') && !project.name.includes('business-site') && !project.name.includes('project-movies') && !project.name.includes('music-releases') && !project.name.includes('project-survey'))

  return (
    <OuterWrapper gray>
      <InnerWrapper>
        <WhitePinkH2>OTHER PROJECTS</WhitePinkH2>
        {filteredProjects.map((project) =>
          <div key={project.id}>
            <PinkH3>{project.name.replaceAll('-', ' ').toUpperCase()}</PinkH3>
            <A href={project.html_url}>
              <P>{project.description} <ReadMoreArrow> &gt;&gt; </ReadMoreArrow></P>
            </A>
            <TagContainer>{project.topics.map((topic) => <Tag>{topic}</Tag>)}
            </TagContainer>
          </div>)}
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default OtherProjects