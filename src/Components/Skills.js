import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './Shared/ContentWrapper';
import TitleButtonStyle from './Shared/TitleButton';

const SkillsStyle = styled.div`
background-color: var(--thirdBackground);
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 60px 0;
gap: 5px; 
text-align: center;
align-items: start;
`
const Skills = () => {
  // padding: 60px 0;
  // display: grid;
  // grid-template-columns: repeat(1, 1fr);
  // /* gap: 5px; */
  // text-align: center;
  // align-items: start;

  return (
    <ContentWrapper as="section">
      <TitleButtonStyle />
      <SkillsStyle>
        <div className="project-text">
          <h2 className="small-title">CODE</h2>
          <p className="text-list">HTML5</p>
          <p className="text-list">CSS3</p>
          <p className="text-list">JavaScript ES6</p>
          <p className="text-list">React</p>
          <p className="text-list">GitHub</p>
        </div>
        <div className="project-text">
          <h2 className="small-title">TOOLBOX</h2>
          <p className="text-list">Figma</p>
          <p className="text-list">Miro</p>
          <p className="text-list">Figjam</p>
          <p className="text-list">Keynote</p>
          <p className="text-list">Slack</p>
        </div>
        <div className="project-text">
          <h2 className="small-title">UPCOMING</h2>
          <p className="text-list">Node.js</p>
          <p className="text-list">Redux</p>
        </div>
        <div className="project-text">
          <h2 className="small-title">MORE</h2>
          <p className="text-list">Strategic User Research</p>
          <p className="text-list">Usability</p>
          <p className="text-list">Accessibility</p>
          <p className="text-list">Project leading</p>
          <p className="text-list">Agile methodology</p>
          <p className="text-list">Content managment</p>
        </div>
      </SkillsStyle>
    </ContentWrapper>
  );
};
export default Skills;
