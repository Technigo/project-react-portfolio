import React from 'react';
import { SectionContainer, ArticleContainer } from './styled/Containers.styled';
import { ProjectsGrid } from './styled/Grids.styled';
import Paragraph from './styled/Paragraph.styled';
import { Topic, TopicsContainer } from './styled/Topics.styled';

const OtherProjects = ({ repos }) => {
  return (
    <SectionContainer>
      <h4>Other Projects</h4>
      <ProjectsGrid other>
        {repos.map((project) => {
          if (project.topics.includes('portfolio')) {
            return (
              <ArticleContainer other key={project.id}>
                <h5>{project.name.split('-').join(' ').slice(8)}</h5>
                <Paragraph>{project.description}</Paragraph>
                <TopicsContainer aria-hidden>
                  {project.topics.reverse().map((topic) => (topic !== 'portfolio' && <Topic>{topic.split('-').join(' ')}</Topic>))}
                </TopicsContainer>
                <TopicsContainer>
                  <a href={project.homepage} target="_blank" rel="noreferrer">View it Live</a>
                  <span>|</span> <a href={project.html_url} target="_blank" rel="noreferrer">GitHub Repo</a>
                </TopicsContainer>
              </ArticleContainer>
            );
          } else return false;
        })}
      </ProjectsGrid>
    </SectionContainer>
  );
};

export default OtherProjects;