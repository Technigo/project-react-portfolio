import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import SectionMainHeading from './styled/SectionMainHeading.styled';
import SectionSubHeading from './styled/SectionSubHeading.styled';
import Paragraph from './styled/Paragraph.styled';

const FeatProjects = () => {
  return (
    <SectionContainer bg>
      <SectionMainHeading>Featured Projects</SectionMainHeading>
      <ArticleGrid>

        <ArticleCard>
          <SectionSubHeading>Happy Thoughts</SectionSubHeading>
          <Paragraph grid>Practice React Router</Paragraph>
        </ArticleCard>

        <ArticleCard>
          <SectionSubHeading>Weather App</SectionSubHeading>
          <Paragraph grid>A project to practice API.</Paragraph>
        </ArticleCard>

      </ArticleGrid>
    </SectionContainer>
  );
};

export default FeatProjects;