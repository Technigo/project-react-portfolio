import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import Paragraph from './styled/Paragraph.styled';
import TopicsContainer from './styled/TopicsContainer.styled';
import Topic from './styled/Topic.styled';

const OtherProjects = ({ repos }) => {
  console.log(repos)
  return (
    <SectionContainer bg>
      <h4>Other Projects</h4>
      <ArticleGrid other>
        {repos.sort().map((project) => {
          if (project.created_at.startsWith('2022-09') && project.description) {
            return (
              <ArticleCard other key={project.id}>
                <h5>{project.name.slice(8)}</h5>
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