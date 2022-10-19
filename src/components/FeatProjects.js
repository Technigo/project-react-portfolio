import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import SectionMainHeading from './styled/SectionMainHeading.styled';
import SectionSubHeading from './styled/SectionSubHeading.styled';
import Paragraph from './styled/Paragraph.styled';

const FeatProjects = ({ repos }) => {
  return (
    <SectionContainer bg>
      <SectionMainHeading>Featured Projects</SectionMainHeading>
      <ArticleGrid>
        {repos.map((project) => (
          <ArticleCard>
            <SectionSubHeading>{project.name}</SectionSubHeading>
            <Paragraph grid>{project.description}</Paragraph>
            <p>{project.topics}</p>
          </ArticleCard>
        ))}
      </ArticleGrid>
    </SectionContainer>
  );
};

export default FeatProjects;