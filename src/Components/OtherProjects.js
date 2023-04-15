import {
	SectionContainer,
	Title,
	SubTitle,
	TagWrapper,
	Tags,
} from 'StyledComponents/GlobalStyle';
import styled from 'styled-components';

const Container = styled.div`
	padding: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Paragraph = styled.h3`
	text-align: center;
	border-bottom: 1px solid #000000;
	padding-bottom: 5px;
`;

const ProjectDesc = styled.a`
	font-size: 24px;
	color: grey;
	text-align: center;
	text-decoration: none;
	font-weight: 550;
	line-height: 150%;
	padding-top: 20px;
	cursor: pointer;

	&:hover {
		color: #5f9df7;
	}
`;

const OtherProjects = () => {
	return (
		<SectionContainer backgroundColor="whitesmoke">
			<Title>Other Projects</Title>
			<Paragraph>
				I code on my free time to get my hands dirty. Best way to learn right?
				Check out some other projects I have loads fun working on 🤩
			</Paragraph>

			<Container>
				<ProjectDesc
					href="https://react-tictactoe-jessnmo.netlify"
					target="_blank"
				>
					Tic-Tac-Toe in React
				</ProjectDesc>
				<p>
					This is inspired by the React Document. I first followed the
					instruction from the documentation, however, would also like to work
					on it using another approach.
				</p>
				<TagWrapper>
					<Tags>React.js</Tags>
					<Tags>CSS</Tags>
				</TagWrapper>
			</Container>

			<Container>
				<ProjectDesc
					href="https://jessnmo.github.io/flexbox-game/"
					target="_blank"
				>
					Duplicate Flexbox Game
				</ProjectDesc>
				<p>
					This is inspired by the flexbox froggy game. I learned a lot by going
					through this game, so naturally, I had to get my hands dirty to make a
					duplication.
				</p>
				<TagWrapper>
					<Tags>React.js</Tags>
					<Tags>CSS</Tags>
				</TagWrapper>
			</Container>

			<Container>
				<ProjectDesc href="#" target="_blank">
					Buzzfeed Quiz Dupe in React with JSON Server
				</ProjectDesc>
				<p>
					We know what kind of cheese you are, do you? Get in there to pick your
					answers, we will tell you what kind of cheese you are! I added a
					db.json to store the info I can fetch in my Component, to practice
					fetching.
				</p>
				<TagWrapper>
					<Tags>React.js</Tags>
					<Tags>CSS</Tags>
					<Tags>JSON</Tags>
				</TagWrapper>
			</Container>
			<Container>
				<ProjectDesc
					href="https://friends-redux-quiz.netlify.app/"
					target="_blank"
				>
					Quiz build in Redux
				</ProjectDesc>
				<p>
					First project build in Redux. Used a boilerplate for the base set up.
					In this project I learned how to use conditional statement in
					className and assign different styles when it changes.
				</p>
				<TagWrapper>
					<Tags>Redux</Tags>
					<Tags>styled components</Tags>
					<Tags>React</Tags>
					<Tags>CSS</Tags>
				</TagWrapper>
			</Container>
		</SectionContainer>
	);
};

export default OtherProjects;
