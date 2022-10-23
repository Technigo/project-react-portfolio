/*eslint-disable linebreak-style*/   
/*eslint-disable indent */   
/*eslint-disable spaced-comment*/  
/*eslint-disable no-trailing-spaces*/  
/*eslint-disable no-multiple-empty-lines*/  
import React from "react";
import styled from "styled-components";
import { SectionHeading, Heading } from 'GlobalStyles';

const Section  = styled.section`
margin-left: 5%;
margin-right: 5%;
padding-top:10%;
text-align: center;
align-items: center;
justify-content: center;

`
const SkillsContainer  = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;
  

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left: 15%;
    margin-right: 15%;
    }
`

export const Skills = () =>
   {
    return (
    <Section>
    <SectionHeading>SKILLS</SectionHeading>
      <SkillsContainer>
        <div>
         <Heading>CODE</Heading>
         <p>HTML5</p>
         <p>CSS</p>
         <p>JavaScript</p> 
         <p>React</p> 
         </div>
        
        <div>
         <Heading>UPCOMING</Heading>
         <p>C#</p>
         <p>.NET</p> 
         <p>Node</p>
         <p>.Redux</p> 
         </div>
        
        <div>
        <Heading>TOOLBOX</Heading>
        <p>Adobe</p>
        <p>VS Code</p> 
        <p>Windows Server 2008</p>
        <p>Active Directory</p>
        </div>
        
        <div>
        <Heading>MORE</Heading>
        <p>Branding</p>
        <p>Agile Methology</p>
        <p>Place Management</p>
        </div>
        </SkillsContainer>
    </Section>
    );
  };

export default Skills;
