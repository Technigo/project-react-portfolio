import {
	FeaturedContainer,
	FeatureLayout,
} from 'StyledComponents/FeaturedProject.style';
import {
	SectionContainer,
	SectionParagraph,
	Title,
	Tags,
} from 'StyledComponents/GlobalStyle';
import projects from 'RepoData/featured-project.json';

export const FeaturedProjects = () => {
	return (
		<FeaturedContainer>
			<Title>Featured Projects</Title>

			<FeatureLayout>{}</FeatureLayout>
		</FeaturedContainer>
	);
};
