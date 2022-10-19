import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import SectionMainHeading from './styled/SectionMainHeading.styled';
import SectionSubHeading from './styled/SectionSubHeading.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import Paragraph from './styled/Paragraph.styled';
import TopicsContainer from './styled/TopicsContainer.styled';
import Topic from './styled/Topic.styled';

const OtherProjects = ({ repos }) => {
  return (
    <SectionContainer bg>
      <SectionMainHeading>Other Projects</SectionMainHeading>
      <ArticleGrid other>
        {repos.sort().map((project) => {
          if (project.created_at.startsWith('2022-09') && project.description) {
            return (
              <ArticleCard other key={project.id}>
                <SectionSubHeading>{project.name.slice(8)}</SectionSubHeading>
                <Paragraph>{project.description}</Paragraph>
                <TopicsContainer>
                  {project.topics.map((topic) => <Topic>{topic}</Topic>)}
                </TopicsContainer>
              </ArticleCard>
            );
          } else return false;
        })}
      </ArticleGrid>
    </SectionContainer>
  );
};

export default OtherProjects;