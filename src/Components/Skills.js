import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';

const Skills = () => {
  const SkillsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 30px 0 60px 0 ;
  gap: 5px; 
  align-items: start;
  text-align: center;
  font-size: 16px;
  line-height: 34px;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  border: solid 3px red;

  .project-text{
    border: solid 3px green;
    width:auto;
  }

  .toolbox-wrapper{ //center
    border: solid 2px black;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
  }




  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  `
  return (
    <ContentWrapper
      as="section"
      backgroundColor="var(--secondBackground)">
      <ColorTitle
        background="var(--fourthTitle)"
        title="Skills" />
      <SkillsStyle>
        <div className="project-text">
          <h2 className="small-title">CODE</h2>
          <p className="text-list">HTML5</p>
          <p className="text-list">CSS3</p>
          <p className="text-list">JavaScript ES6</p>
          <p className="text-list">React</p>
          <p className="text-list">GitHub</p>
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
        <div className="toolbox-wrapper">
          <div className="project-text">
            <h2 className="small-title">TOOLBOX</h2>
            <p className="text-list">Figma</p>
            <p className="text-list">Miro</p>
            <p className="text-list">Figjam</p>
            <p className="text-list">Keynote</p>
            <p className="text-list">Slack</p>
          </div>
        </div>
      </SkillsStyle>
    </ContentWrapper>
  );
};
export default Skills;
