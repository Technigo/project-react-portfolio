import { Title, SubTitle } from 'StyledComponents/GlobalStyle';
import {
	SkillsContainer,
	SubSkillsContainer,
	SkillsWrapper,
} from 'StyledComponents/Skills.style';

const Skills = () => {
	return (
		<SkillsWrapper>
			<Title>Skills</Title>
			<SkillsContainer>
				<SubSkillsContainer>
					<SubTitle>CODE</SubTitle>
					<p>HTML 5</p>
					<p>CSS</p>
					<p>JavaScript ES6</p>
					<p>React.js</p>
				</SubSkillsContainer>
				<SubSkillsContainer>
					<SubTitle>Tool Box</SubTitle>
					<p>Figma</p>
					<p>Jira</p>
					<p>Miro</p>
					<p>Github</p>
				</SubSkillsContainer>
				<SubSkillsContainer>
					<SubTitle>Other</SubTitle>
					<p>Project Management</p>
					<p>Stakeholder Management</p>
					<p>Effective Communication</p>
					<p>Agile Workflow</p>
				</SubSkillsContainer>
				<SubSkillsContainer>
					<SubTitle>Upcoming Code Skills</SubTitle>
					<p>node.js</p>
					<p>redux</p>
					<p>TypeScript</p>
					<p>Angular.js</p>
				</SubSkillsContainer>
			</SkillsContainer>
		</SkillsWrapper>
	);
};

export default Skills;
