import {
	SectionContainer,
	Title,
	SubTitle,
	ProjectDesc,
	TagWrapper,
	Tags,
} from 'StyledComponents/GlobalStyle';
import styled from 'styled-components';

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	//alien-items: start;
	border-bottom: 2px solid black;
`;

const OtherProjects = () => {
	return (
		<SectionContainer backgroundColor="whitesmoke">
			<Title>Other Projects</Title>
			<ProjectDesc>
				I code on my free time to get my hands dirty. Best way to learn right?
				Check out some other projects I have loads fun working on 🤩
			</ProjectDesc>
			<Container>
				<h2>Test</h2>
				<p>test test test</p>
			</Container>

			<TagWrapper>
				<Tags>React.js</Tags>
				<Tags>HTML5</Tags>
				<Tags>CSS</Tags>
			</TagWrapper>
		</SectionContainer>
	);
};

export default OtherProjects;
