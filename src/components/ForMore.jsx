import React from 'react'
import SectionContainer from './styled/SectionContainer.styled'
import SectionMainHeading from './styled/SectionMainHeading.styled'
import SkillsMoreGrid from './styled/SkillsMoreGrid.styled'
import { GitHubSvg, LinkedInSvg, StackSvg } from './Icons';

const ForMore = () => {
  return (
    <SectionContainer>
      <SectionMainHeading>For More</SectionMainHeading>
      <SkillsMoreGrid>

        <div>
          <a href="https://github.com/karlfredrikholm/" target="_blank" rel="noreferrer">
            <GitHubSvg />
            <p>GitHub</p>
          </a>
        </div>

        <div>
          <a href="https://stackoverflow.com/users/19384002/fredrik-holm/" target="_blank" rel="noreferrer">
            <StackSvg />
            <p>Stack Overflow</p>
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/fredrik-holm-10406b106/" target="_blank" rel="noreferrer">
            <LinkedInSvg />
            <p>LinkedIn</p>
          </a>
        </div>

      </SkillsMoreGrid>
    </SectionContainer>
  )
}

export default ForMore;