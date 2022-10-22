import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import { ProjectsGrid } from './styled/Grids.styled';
import ArticleContainer from './styled/ArticleContainer.styled';
import ProjectImg from './styled/ImageContainers.styled';
import Paragraph from './styled/Paragraph.styled';
import { Topic, TopicsContainer } from './styled/Topics.styled';
import data from '../feat-projects';

const FeaturedProjects = () => {
  return (
    <SectionContainer bg>
      <h4>Featured Projects</h4>
      <ProjectsGrid>
        {data.map((project) => (
          <ArticleContainer key={project.name}>
            <a href={project.netlify_url} target="_blank" rel="noreferrer" aria-hidden>
              <ProjectImg style={{ backgroundImage: `url(${project.image})` }}>
                <div>
                  <h6>{project.name}</h6>
                </div>
              </ProjectImg>
            </a>
            <h5>{project.project_name}</h5>
            <Paragraph grid>{project.description}</Paragraph>
            <TopicsContainer aria-hidden>
              {project.topics.map((topic) => <Topic>{topic}</Topic>)}
            </TopicsContainer>
            <TopicsContainer>
              <a href={project.netlify_url} target="_blank" rel="noreferrer">View it Live</a>
              <span>|</span> <a href={project.github_url} target="_blank" rel="noreferrer">GitHub Repo</a>
            </TopicsContainer>
          </ArticleContainer>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  )
};

export default FeaturedProjects;