import React from 'react';
import styled from 'styled-components';
import { DarkerContainer } from './DarkerContainer.syled';
import ListSection from './ListSection';

const Skills = () => {
  return (
    <StyledSkillsWrapper className="skills bg-darker">
      <h2 className="grid-headig">SKILLS</h2>
      <StyledSkillsContainer className="skill-wrapper">
        <div>
          <ListSection
            heading="Code"
            ListItems={['HTML 5', 'CSS3', 'JavaScript ES6', 'React', 'Styled Components', 'Git']} />
        </div>
        <div>
          <ListSection
            heading="Upcoming"
            ListItems={['Redux', 'Node.js', 'MongoDB', 'jQuery']} />
        </div>
        <div>
          <ListSection
            heading="Toolbox"
            ListItems={['VS Code', 'GitHub', 'Kanban', 'Trello', 'Slack']} />
        </div>
        <div>
          <ListSection
            heading="More"
            ListItems={['Pair-programming', 'Mob-programming', 'Interpersonal skills', 'Communicative', 'Problem solver']} />
        </div>
      </StyledSkillsContainer>
    </StyledSkillsWrapper>
  )
}

export default Skills;

const StyledSkillsWrapper = styled(DarkerContainer)`

h3 {
  background-color: transparent;
  color: var(--heading);
  font-size: 17px;
  margin: 0 auto;
}
`
const StyledSkillsContainer = styled.div`
  display: grid;
  grid-auto-flow: column dense;
  grid-template-columns: 1fr 1fr;  

  @media (min-width: 600px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
  
  div:nth-child(1) {
  grid-column: 1
  }
  div:nth-child(2) {
    grid-column: 1;
  }
  div:nth-child(3) {
    grid-column: 2;

  }
  div:nth-child(4) {
    grid-column: 2;
    @media (min-width: 600px) {
      grid-column: 3;
    }
  }
  
`