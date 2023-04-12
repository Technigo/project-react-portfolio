import {
	Title,
	SubTitle,
	SectionContainer,
	TagWrapper,
	Tags,
	ProjectDesc,
} from '../StyledComponents/GlobalStyle';
import styled from 'styled-components';
import projects from '../RepoData/featured-project.json';

/* We need: 
1) ProjectContainer with grid layout
2) Cards with flex layout 
3) We will use styled component to work with grid-template-areas */

const ProjectContainer = styled.div`
	// We will define this block's layout by using grid-template-areas
	display: grid;
	grid-row-gap: 20px;
	grid-column-gap: 50px;
	grid-template-areas:
		'card1 card2'
		'card3 card4';
`;

const Card = styled.div`
	border-radius: 10px;
	width: 100%;
	//height: 100%;
	padding: 20px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	grid-area: ${(props) => props.area};
	position: relative;
`;

const CardContent = styled.div`
	text-align: center;

	transition: transform 3s;
	transform-style: preserve-3d;

	${Card}:hover & {
		transform: rotateY(0.5turn); //.5 turn is 180deg
	}
`;

const CardFront = styled.div`
	padding-top: 20px;
	backface-visibility: hidden;
	transform-style: preserve-3d;
`;

const CardBack = styled.div`
	position: absolute;
	top: 30%;
	//left: 50%;
	//transform: translate(-50%, -50%);
	backface-visibility: hidden;
	transform-style: preserve-3d;
	transform: rotateY(0.5turn);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Img = styled.div`
	width: 400px;
	height: 300px;
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
							<CardContent>
								<CardFront>
									<SubTitle>{project.title}</SubTitle>
									<Img img={project.img} src={project.repo_name} />
								</CardFront>
								{/* </CardContent>
							<CardContent> */}
								<CardBack>
									<ProjectDesc href={project.url} target="_blanket">
										{project.project_description}
									</ProjectDesc>
									<TagWrapper>
										{project.tags.map((tag) => {
											return <Tags key={tag.id}>{tag.name}</Tags>;
										})}
									</TagWrapper>
								</CardBack>
							</CardContent>
						</Card>
					);
				})}
			</ProjectContainer>
		</SectionContainer>
	);
};

export default FeaturedProjects;
