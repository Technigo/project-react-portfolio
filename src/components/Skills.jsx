import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import SkillsGrid from './styled/SkillsGrid.styled';

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