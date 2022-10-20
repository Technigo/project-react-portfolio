import React from 'react';
import styled from 'styled-components';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';

const Skills = () => {
  return (
    <SkillsStyling>
      <section className="section skills">
        <SectionHeaderStyling><div><h2>Skills</h2></div></SectionHeaderStyling>
        <div className="skills-lists">
          <div className="code">
            <ul>Code</ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>VScode</li>
            <li>SQL</li>
            <li>GitHub</li>
          </div>

          <div className="tools">
            <ul>Tools</ul>
            <li>Jira</li>
            <li>Figma</li>
            <li>Notion</li>
            <li>SSMS</li>
            <li>Slack</li>
            <li>Sharepoint</li>
            <li>Office 365</li>
            <li>Jenkins</li>
          </div>

          <div className="other">
            <ul>Other</ul>
            <li>Software Testing</li>
            <li>Project Management</li>
            <li>Test Management</li>
            <li>Software Testing</li>
            <li>Leadership</li>
          </div>
          <div className="upcoming">
            <ul>Upcoming</ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Adobe Illustrator</li>

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
