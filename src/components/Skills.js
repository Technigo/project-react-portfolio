import React from 'react';
import styled from 'styled-components';
import { DarkerContainer } from './DarkerContainer.syled';
import ListSection from './ListSection';
import { StyledListSection } from './ReusableStyles.style';

const Skills = () => {
  return (
    <StyledSkillsWrapper className="skills bg-darker">
      <h2 className="grid-headig">SKILLS</h2>
      <div className="skill-wrapper">
        <FirstListSection>
          <ListSection
            heading="Code"
            ListItems={['HTML 5', 'CSS3', 'JavaScript ES6', 'React', 'Styled Components', 'Git']} />
        </FirstListSection>
        <SecondListSection>
          <ListSection
            heading="Upcoming"
            ListItems={['Redux', 'Node.js', 'MongoDB', 'jQuery']} />
        </SecondListSection>
        <ThirdListSection>
          <ListSection
            heading="Toolbox"
            ListItems={['VS Code', 'GitHub', 'Kanban', 'Trello', 'Slack']} />
        </ThirdListSection>
        <FourthListSection>
          <ListSection
            heading="More"
            ListItems={['Interpersonal skills', 'Communicative', 'Problem solver']} />
        </FourthListSection>
      </div>
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
const FirstListSection = styled(StyledListSection)`
  @media (min-width: 600px) {
    grid-column: 1;
  }
  `
const SecondListSection = styled(StyledListSection)`
  @media (min-width: 600px) {
    grid-column: 1;
  }
  `
const ThirdListSection = styled(StyledListSection)`
  grid-column: 2;
  `
const FourthListSection = styled(StyledListSection)`
  grid-column: 2;
  @media (min-width: 600px) {
    grid-column: 3;
  }
`