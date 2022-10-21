import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import { ArticleGrid } from './styled/Grids.styled';
import ArticleCard from './styled/ArticleContainer.styled';
import ProjectImg from './styled/ImageContainers.styled';
import Paragraph from './styled/Paragraph.styled';
import { Topic, TopicsContainer } from './styled/Topics.styled';
import data from '../feat-projects';

const FeaturedProjects = () => {
  return (
    <SectionContainer bg>
      <h4>Featured Projects</h4>
      <ArticleGrid>
        {data.map((project) => (
          <ArticleCard key={project.name}>
            <a href={project.netlify_url} target="_blank" rel="noreferrer" aria-hidden="true">
              <ProjectImg style={{ backgroundImage: `url(${project.image})` }}>
                <div>
                  <h6 aria-hidden="true">{project.name}</h6>
                </div>
              </ProjectImg>
            </a>
            <h5>{project.project_name}</h5>
            <Paragraph grid>{project.description}</Paragraph>
            <TopicsContainer aria-hidden="true">
              {project.topics.map((topic) => <Topic>{topic}</Topic>)}
            </TopicsContainer>
            <TopicsContainer>
              <a href={project.netlify_url} target="_blank" rel="noreferrer">View it Live</a>
              <span>|</span> <a href={project.github_url} target="_blank" rel="noreferrer">GitHub Repo</a>
            </TopicsContainer>
          </ArticleCard>
        ))}
      </ArticleGrid>
    </SectionContainer>
  )
};

export default FeaturedProjects;