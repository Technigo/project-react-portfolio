import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from './styled/Containers.styled';
import { SkillsGrid } from './styled/Grids.styled';
import { GitHubSvg, LinkedInSvg, StackSvg } from './Icons';

const ForMore = () => {
  return (
    <SectionContainer bg>
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

const ForMoreIcons = styled(SkillsGrid)`
  & a {
     color: var(--sub-color);
     font-family: var(--main-font);
     font-size: 0.8rem;
     font-weight: 700;
     text-decoration: none;
     text-transform: none;
     width: fit-content;
  }

  & a:visited {
    color: var(--sub-color)
  }

  & svg { 
      background-color: var(--sub-color); 
      border-radius: 50%; 
      color: white; 
      width: 3.5rem; 
      height: 3.5rem; 
      margin-bottom: 0.5rem; 
      padding: 12px 0;
    }
`