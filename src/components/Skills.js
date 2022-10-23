import React from 'react';
import styled from 'styled-components';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';
import data from 'data.json'

const skillsCode = data.Skills.Code;
console.log(skillsCode);
const skillsTools = data.Skills.Tools;
console.log(skillsTools);
const skillsOther = data.Skills.Other;
console.log(skillsOther);
const skillsUpcoming = data.Skills.Upcoming;
console.log(skillsUpcoming);

const codeSkillsList = skillsCode.map(({ Skill }) => Skill).join(', ');
const toolsSkillsList = skillsTools.map(({ Skill }) => Skill).join(', ');
const otherSkillsList = skillsOther.map(({ Skill }) => Skill).join(', ');
const upcomingSkillsList = skillsUpcoming.map(({ Skill }) => Skill).join(', ');

const Skills = () => {
  return (
    <SkillsStyling>
      <section className="section skills">
        <SectionHeaderStyling><div><h2>Skills</h2></div></SectionHeaderStyling>
        <div className="skills-lists">
          <div className="code">
            <ul>Code</ul>
            <li>{codeSkillsList}</li>
          </div>

          <div className="tools">
            <ul>Tools</ul>
            <li>{toolsSkillsList}</li>
          </div>

          <div className="other">
            <ul>Other</ul>
            <li>{otherSkillsList}</li>
          </div>
          <div className="upcoming">
            <ul>Upcoming</ul>
            <li>{upcomingSkillsList}</li>

          </div>
        </div>
      </section>
    </SkillsStyling>)
}

export default Skills

const SkillsStyling = styled.section`

  ul{
    color:#516a59;
    text-decoration: underline;
    font-size: 18px;
    margin: 0px;
    margin-bottom: 3px;
    padding: 0px;
}

li{
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }


    
    .skills-lists{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 0,6vw;
    }
    
    .skills-lists div{
    justify-content: left;
    width: 38vw;
    margin-left: 10vw;
    }
    
    .tools{
        margin: 20px 0px 20px 20px;
    }
    .upcoming{
        margin: 20px 0px 20px 20px;
    }
    .other{
        margin: 20px 0px 20px 15px;
    }
    .code{
        margin: 20px 0px 20px 15px;
    }
    `
