import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import SectionMainHeading from './styled/SectionMainHeading.styled';
import SectionSubHeading from './styled/SectionSubHeading.styled';
import Paragraph from './styled/Paragraph.styled';
import TopicLabels from './styled/TopicLabel.styled';

const FeatProjects = ({ repos }) => {
  return (
    <SectionContainer bg>
      <SectionMainHeading>Featured Projects</SectionMainHeading>
      <ArticleGrid>
        {repos.map((project) => (project.description
          ? <ArticleCard key={project.id}>
            <SectionSubHeading>{project.name}</SectionSubHeading>
            <Paragraph grid>{project.description}</Paragraph>
            <TopicLabels><p>{project.topics}</p></TopicLabels>
          </ArticleCard>
          : null))}
      </ArticleGrid>
    </SectionContainer>
  )
};

export default FeatProjects;