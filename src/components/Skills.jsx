import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import { SkillsGrid } from './styled/Grids.styled';

const Skills = () => {
  return (
    <SectionContainer bg>
      <h4>Skills</h4>
      <SkillsGrid>

        <ul>
          <h5>Tools</h5>
          <li>VS Code</li>
          <li>GitHub</li>
          <li>Adobe CC</li>
          <li>Figma</li>
        </ul>

        <ul>
          <h5>Code</h5>
          <li>JavaScript ES6</li>
          <li>CSS3</li>
          <li>HTML5</li>
        </ul>

        <ul>
          <h5>Soon</h5>
          <li>Redux</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>Mongo DB</li>
        </ul>

      </SkillsGrid>
    </SectionContainer>
  );
};

export default Skills;