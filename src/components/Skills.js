import React from 'react';
import styled from 'styled-components';
import { ceruleanBlue } from 'Styles';

const Skills = () => {
  return (
    <SkillsContainerWrapper>
      <SkillsContainer>
        <ul>
          <SkillsContainerTitle>CODE</SkillsContainerTitle>
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript ES6</li>
          <li>React</li>
          <li>Styled Components</li>
          <li>Git</li>
        </ul>
      </SkillsContainer>
      <SkillsContainer>
        <ul>
          <SkillsContainerTitle>TOOLBOX</SkillsContainerTitle>
          <li>Octopus deploy</li>
          <li>SQL Server</li>
          <li>GraphQL</li>
          <li>Jira</li>
          <li>Kanban Flow</li>
          <li>DevExpress reports</li>
          <li>Postman</li>
        </ul>
      </SkillsContainer>
      <SkillsContainer>
        <ul>
          <SkillsContainerTitle>MORE</SkillsContainerTitle>
          <li>Tech support tier 2</li>
          <li>Project leader</li>
          <li>Head QA engineer</li>
          <li>Customer solutions</li>
          <li>Agile methodology</li>
        </ul>
      </SkillsContainer>
      <SkillsContainer>
        <ul>
          <SkillsContainerTitle>UPCOMING</SkillsContainerTitle>
          <li>Redux</li>
          <li>Node.js</li>
        </ul>
      </SkillsContainer>
    </SkillsContainerWrapper>
  );
};

export default Skills;

const SkillsContainerWrapper = styled.div`
  font-size: 16px;
  line-height: 1.6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: 'Roboto';

  @media (min-width: 800px) {
    font-size: 24px;
  }
`;

const SkillsContainer = styled.div`
  text-align: center;
  padding: 10px 0;
  width: 150px;

  @media (min-width: 800px) {
    padding: 20px 50px;
    width: 220px;
  }
`;

const SkillsContainerTitle = styled.li`
  color: ${ceruleanBlue};
`;
