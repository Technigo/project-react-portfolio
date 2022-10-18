import React from 'react';
import styled from 'styled-components';
import { DarkerContainer } from './DarkerContainer.syled';

const Skills = () => {
  return (
    <StyledSkillsWrapper className="skills bg-darker">
      <h2 className="grid-headig">SKILLS</h2>
      <div className="skill-wrapper">
        <div className="list-section list-section1">
          <h3>Code</h3>
          <ul className="skill-group code">
            <li className="skill-list">HTML 5</li>
            <li className="skill-list">CSS3</li>
            <li className="skill-list">JavaScript ES6</li>
            <li className="skill-list">Git</li>
          </ul>
        </div>

        <div className="list-section list-section2">
          <h3>Upcoming</h3>
          <ul className="skill-group upcoming">
            <li className="skill-list">React</li>
            <li className="skill-list">Styled Components</li>
            <li className="skill-list">jQuery</li>
            <li className="skill-list">Redux</li>
            <li className="skill-list">Node.js</li>
            <li className="skill-list">MongoDB</li>
          </ul>
        </div>

        <div className="list-section list-section3">
          <h3>Toolbox</h3>
          <ul className="skill-group more-skills toolbox">
            <li className="skill-list">VSCode</li>
            <li className="skill-list">Slack</li>
            <li className="skill-list">GitHub</li>
            <li className="skill-list">Trello</li>
            <li className="skill-list">Kanban</li>
          </ul>
        </div>

        <div className="list-section list-section4">
          <h3>More</h3>
          <ul className="skill-group more-skills more">
            <li className="skill-list">Hopefully more</li>
            <li className="skill-list">Hopefully more</li>
            <li className="skill-list">Hopefully more</li>
          </ul>
        </div>
      </div>
    </StyledSkillsWrapper>
  )
}

export default Skills;

const StyledSkillsWrapper = styled(DarkerContainer)`

`