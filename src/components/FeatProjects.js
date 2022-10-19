import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import SectionMainHeading from './styled/SectionMainHeading.styled';
import SectionSubHeading from './styled/SectionSubHeading.styled';
import Paragraph from './styled/Paragraph.styled';
// import Topic from './styled/Topic.styled';
// import TopicsContainer from './styled/TopicsContainer.styled';

const FeatProjects = () => {
  return (
    <SectionContainer bg>
      <SectionMainHeading>Featured Projects</SectionMainHeading>
      <ArticleGrid>
        <ArticleCard>
          <SectionSubHeading>name</SectionSubHeading>
          <Paragraph grid>description</Paragraph>
        </ArticleCard>
      </ArticleGrid>
    </SectionContainer>
  )
};

export default FeatProjects;

/* <TopicsContainer>
{project.topics.sort().reverse().map((topic) => (
  <Topic>{topic}</Topic>
))}
</TopicsContainer> */
/*
{repos.filter((project) => (project.description */

/*           <a href={project.html_url}>View repository</a>
          <a href={project.homepage}>View it live</a> */