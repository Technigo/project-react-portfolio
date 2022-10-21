import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import { SkillsGrid } from './styled/Grids.styled';

const Skills = () => {
  return (
    <SectionContainer bg>
      <h4>Skills</h4>
      <SkillsGrid>
        <div>
          <h5>Code</h5>
          <ul>
            <li>React</li>
            <li>JavaScript ES6</li>
            <li>CSS3</li>
            <li>HTML5</li>
          </ul>
        </div>
        <div>
          <h5>Soon</h5>
          <ul>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Mongo DB</li>
          </ul>
        </div>
        <div>
          <h5>Want to learn</h5>
          <ul>
            <li>TypeScript</li>
            <li>PHP</li>
            <li>Python</li>
          </ul>
        </div>
      </SkillsGrid>
    </SectionContainer>
  );
};

export default Skills;