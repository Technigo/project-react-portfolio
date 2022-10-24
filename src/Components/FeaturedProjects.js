import {
	FeaturedContainer,
	FeatureLayout,
} from 'StyledComponents/FeaturedProject.style';
import {
	SubTitle,
	ProjectDesc,
	Title,
	Tags,
} from 'StyledComponents/GlobalStyle';
import projects from 'RepoData/featured-project.json';

export const FeaturedProjects = () => {
	return (
		<FeaturedContainer>
			<Title>Featured Projects</Title>
			{projects.map((project) => {
				return (
					<FeatureLayout key={project.id}>
						<img src={project.img} alt={project.repo_name} />
						<SubTitle> {project.title}</SubTitle>
						<ProjectDesc>{project.project_description}</ProjectDesc>
						{project.tags.map((tag) => {
							return <Tags key={tag.id}>{tag.name}</Tags>;
						})}
					</FeatureLayout>
				);
			})}
		</FeaturedContainer>
	);
};
