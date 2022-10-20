import React from 'react';
// import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const Skills = () => {
  return (
    <OuterWrapper className="background">
      <InnerWrapper>
        <h2>Skills</h2>
        <h3>Code</h3>
        <ul>
          <li>Github</li>
          <li>HTML & CSS</li>
          <li>Javascript</li>
          <li>React</li>
        </ul>
        <h3>Toolbox</h3>
        <ul>
          <li>Figma</li>
          <li>Invision</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
        <h3>More</h3>
        <ul>
          <li>WCAG 2.1</li>
          <li>UI-design</li>
          <li>Design systems</li>
        </ul>
        <h3>Upcoming</h3>
        <ul>
          <li>Redux</li>
          <li>Node.js</li>
        </ul>
      </InnerWrapper>
    </OuterWrapper>
  );
};
export default Skills;