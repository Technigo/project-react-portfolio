import React from 'react';
import styled from 'styled-components';

export const Skills = ({ color, backColor }) => {
  return (
    <OuterWrapper backColor={backColor}>
      <InnerWrapper>
        <SkillsHeadline color={color}>SKILLS</SkillsHeadline>
        <SkillsContainer>
          <SkillSection>
            <h3>CODE</h3>
            <p>JavaScript ES6</p>
            <p>CSS3</p>
            <p>HTML5</p>
            <p>React</p>
            <p>🔜 Redux</p>
            <p>🔜 Node.js</p>
          </SkillSection>
          <SkillSection>
            <h3>TOOLBOX</h3>
            <p>GitHub</p>
            <p>VSCode</p>
            <p>Figma</p>
          </SkillSection>
          <SkillSection>
            <h3>MORE</h3>
            <p>Agile Methodology</p>
            <p>Responsive Design</p>
            <p>Pedagogical communication</p>
            <p>Group Dynamics</p>
          </SkillSection>
        </SkillsContainer>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.section`
background-color: ${(props) => props.backColor};
display: flex;
flex-direction: column;
align-items: center;
width: auto;
height: auto;
`

const InnerWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
margin: 0 auto;
`

const SkillsHeadline = styled.h2`
background-color: ${(props) => props.color};
color: white;
font-family: 'Montserrat', sans-serif;
display: inline-block;
font-size: 22px;
line-height: 1;
padding: 5px 10px;
margin: 20px 0 20px 0;
line-height: 1;
`;

const SkillsContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: space-between;

@media (min-width: 668px){
    flex-direction: row;
  }
`

const SkillSection = styled.div`
font-family: 'Montserrat', sans-serif;
text-align: center;
padding: 5px; 
margin: 5px;
`