import React from 'react'
import SectionContainer from './styled/SectionContainer.styled'
import ForMoreIcons from './styled/ForMoreIcons.styled'
import { GitHubSvg, LinkedInSvg, StackSvg } from './Icons';

const ForMore = () => {
  return (
    <SectionContainer>
      <h4>For More</h4>
      <ForMoreIcons>
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
      </ForMoreIcons>
    </SectionContainer>
  );
};

export default ForMore;