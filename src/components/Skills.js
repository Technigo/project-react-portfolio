import React from 'react';
import styled from 'styled-components';
import { OuterWrapper } from './OuterWrapper'

const Skills = () => {
	return (
		<OuterWrapper primary>
			<div className="innerwrapper">
				<h3>Skills</h3>
				<SkillsStyler>
					<ul>
						<li className="skills-headline">Code</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>React</li>
					</ul>
					<ul>
						<li className="skills-headline">Toolbox</li>
						<li>VS Code</li>
						<li>GitHub</li>
						<li>Slack</li>
						<li>Trello</li>
					</ul>
					<ul>
						<li className="skills-headline">Upcoming</li>
						<li>Redux</li>
						<li>Node.js</li>
						<li>Styled Components</li>
					</ul>
				</SkillsStyler>
			</div>
		</OuterWrapper>
	);
};

export default Skills;

const SkillsStyler = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

	.skills-headline{
		font-weight: bold;
	}
	
	ul{
  text-align: center;
	}
	`