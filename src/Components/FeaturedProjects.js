import React, { useEffect, useState } from 'react'
import { OuterWrapper, InnerWrapper } from '../Styled components/GlobalStyles'
import { WhitePinkH2 } from '../Styled components/HeadlineStyles'

const GitHubAPI = 'https://api.github.com/users/jessikalind/repos'

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(GitHubAPI)
      .then((res) => res.json())
      .then((data) => setProjects(data))
  })

  const filteredProjects = projects.filter((project) => project.name === 'project-movies')

  return (
    <OuterWrapper gray>
      <InnerWrapper>
        <WhitePinkH2>FEATURED PROJECTS</WhitePinkH2>
        {filteredProjects.map((project) => <div>{project.name}</div>)}
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default FeaturedProjects