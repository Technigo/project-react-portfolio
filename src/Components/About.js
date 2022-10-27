import React from 'react';
import GlobalStyle, {
	SectionContainer,
	SectionParagraph,
	Title,
} from 'StyledComponents/GlobalStyle';
const About = () => {
	return (
		<SectionContainer backgroundColor="rgb(238, 238, 238)">
			<Title>About</Title>
			<SectionParagraph>
				<strong>Hi there, </strong>I'm Jessica. A Upcoming Frontend Developer
				currently studying at Technigo Coding Bootcamp, expecting to graduate in
				January 2023 🎉. I have almost 5 years experience in Tech Talent
				Acquisition operations in major Tech companies. Working with developers
				on daily basis in some way inspired me to be a developer myself. Not
				only because of my passion and curiosity for coding, but also the desire
				to explore the unknown, continuous learning and feeling supported by the
				tech community.
			</SectionParagraph>
			<GlobalStyle />
		</SectionContainer>
	);
};

export default About;
