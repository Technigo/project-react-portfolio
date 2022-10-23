import {
	SectionContainer,
	Title,
	SubTitle,
	ProjectDesc,
	TagWrapper,
	Tags,
} from 'StyledComponents/GlobalStyle';

const OtherProjects = () => {
	return (
		<SectionContainer backgroundColor="whitesmoke">
			<Title>Other Projects</Title>
			<SubTitle>Book a Workout</SubTitle>
			<ProjectDesc>Booking workout class build in React</ProjectDesc>
			<TagWrapper>
				<Tags>React.js</Tags>
				<Tags>HTML5</Tags>
				<Tags>CSS</Tags>
			</TagWrapper>
		</SectionContainer>
	);
};

export default OtherProjects;
