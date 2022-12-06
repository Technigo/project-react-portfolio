import React from 'react';
import { SectionContainer } from './styled/Containers.styled';
import { SkillsGrid } from './styled/Grids.styled';

const Skills = () => {
  return (
    <SectionContainer bg less>
      <h4>Skills</h4>
      <SkillsGrid skills>

        <ul>
          <li><h5>Tools</h5></li>
          <li>VS Code</li>
          <li>GitHub</li>
          <li>Adobe PS</li>
          <li>Figma</li>
        </ul>

        <ul>
          <li><h5>Code</h5></li>
          <li>JavaScript ES6</li>
          <li>React.js</li>
          <li>CSS</li>
          <li>HTML5</li>
        </ul>

        <ul>
          <li><h5>More</h5></li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>

      </SkillsGrid>
    </SectionContainer>
  );
};

export default Skills;