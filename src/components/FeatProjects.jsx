import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import SectionMainHeading from './styled/SectionMainHeading.styled';
import SectionSubHeading from './styled/SectionSubHeading.styled';
import Paragraph from './styled/Paragraph.styled';
// import Topic from './styled/Topic.styled';
// import TopicsContainer from './styled/TopicsContainer.styled';
import ProjectImg from './styled/ProjectImg.styled';

const FeatProjects = () => {
  return (
    <SectionContainer bg>
      <SectionMainHeading>Featured Projects</SectionMainHeading>
      <ArticleGrid>

        <ArticleCard>
          <ProjectImg project1 />
          <SectionSubHeading>Happy Thoughts</SectionSubHeading>
          <Paragraph grid>React project made to practice get/post requests to API.</Paragraph>
        </ArticleCard>

        <ArticleCard>
          <ProjectImg project2 />
          <SectionSubHeading>Movies</SectionSubHeading>
          <Paragraph grid>Project made to learn React Router, the useParams hook etc.</Paragraph>
        </ArticleCard>

        <ArticleCard>
          <ProjectImg project3 />
          <SectionSubHeading>Survey</SectionSubHeading>
          <Paragraph grid>Survey made to get familiar with React and the useState hook.</Paragraph>
        </ArticleCard>

        <ArticleCard>
          <ProjectImg project4 />
          <SectionSubHeading>Weather Web App</SectionSubHeading>
          <Paragraph grid>JS project done in pairs to practice working with an API.</Paragraph>
        </ArticleCard>

      </ArticleGrid>
    </SectionContainer>
  )
};

export default FeatProjects;