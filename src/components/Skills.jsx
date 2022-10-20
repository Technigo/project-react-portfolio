import React from 'react';
import styled from 'styled-components';
import SectionContainer from './styled/SectionContainer.styled';

const Skills = () => {
  return (
    <SectionContainer bg>
      <h4>Skills</h4>
      <SkillsGrid>
        <div>
          <h5>Toolbox</h5>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        <div>
          <h5>Code</h5>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
        <div>
          <h5>More</h5>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
      </SkillsGrid>
    </SectionContainer>
  );
};

export default Skills;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  margin: var(--margin);
  width: var(--width);

  & ul {
    font-size: 1rem;
    margin-top: 5px;
    line-height: var(--line-height);
    list-style-type: none;
  }
`;