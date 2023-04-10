import {
	Title,
	SubTitle,
	SectionContainer,
	TagWrapper,
	Tags,
	ProjectDesc,
} from 'StyledComponents/GlobalStyle';
import styled from 'styled-components';
import projects from '../RepoData/featured-project.json';

/* We need: 
1) ProjectContainer with grid layout
2) Cards with flex layout 
3) We will use styled component to work with grid-template-areas */

const ProjectContainer = styled.div`
	// We will define this block's layout by using grid-template-areas
	display: grid;
	grid-gap: 15px;
	grid-template-areas: 'card1 card2' 'card3 card4';
`;

const Card = styled.div`
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	gap: 15px;
	grid-area: ${(props) => props.area};
`;

const Img = styled.div`
	width: 494px;
	height: 309px;
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
`;

const FeaturedProjects = () => {
	return (
		<SectionContainer backgroundColor="rgb(238, 238, 238)">
			<Title>Featured Projects</Title>
			<ProjectContainer>
				{projects.map((project, index) => {
					return (
						<Card key={project.id} area={`card${index + 1}`}>
							<SubTitle>{project.title}</SubTitle>
							<Img img={project.img} src={project.repo_name} />
							<ProjectDesc href={project.url} target="_blanket">
								{project.project_description}
							</ProjectDesc>
							<TagWrapper>
								{project.tags.map((tag) => {
									return <Tags key={tag.id}>{tag.name}</Tags>;
								})}
							</TagWrapper>
						</Card>
					);
				})}
			</ProjectContainer>
		</SectionContainer>
	);
};

export default FeaturedProjects;
