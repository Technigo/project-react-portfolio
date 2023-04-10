import { Title, SubTitle } from 'StyledComponents/GlobalStyle';
import {
	SkillsContainer,
	SubSkillsContainer,
	SkillsWrapper,
} from 'StyledComponents/Skills.style';
import { SectionContainer } from '../StyledComponents/GlobalStyle';

const Skills = () => {
	return (
		<SectionContainer backgroundColor="rgb(238, 238, 238)">
			<Title>Skills</Title>
			<SkillsContainer>
				<SubSkillsContainer>
					<SubTitle>Frontend Skills</SubTitle>
					<p>React.js</p>
					<p>JavaScript</p>
					<p>HTML</p>
					<p>CSS</p>
					<p>Redux</p>
					<p>Node.js</p>
					<p>Express.</p>
				</SubSkillsContainer>
				<SubSkillsContainer>
					<SubTitle>Other Skills</SubTitle>
					<p>Git</p>
					<p>Project Management</p>
					<p>Agile Working Environment</p>
					<p>Stakeholder Management</p>
					<p>Change Management</p>
				</SubSkillsContainer>
				<SubSkillsContainer>
					<SubTitle>Backend Skills</SubTitle>
					<p>node.js</p>
					<p>express api</p>
				</SubSkillsContainer>
				<SubSkillsContainer>
					<SubTitle>Tool Box</SubTitle>
					<p>Figma</p>
					<p>Jira</p>
					<p>Github</p>
					<p>Google Doc</p>
					<p>Miro Board</p>
				</SubSkillsContainer>
			</SkillsContainer>
		</SectionContainer>
	);
};

export default Skills;
