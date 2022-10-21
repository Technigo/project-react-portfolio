import React from 'react';
import SectionContainer from './styled/SectionContainer.styled';
import ArticleGrid from './styled/ArticleGrid.styled';
import ArticleCard from './styled/ArticleCard.styled';
import Paragraph from './styled/Paragraph.styled';
import TopicsContainer from './styled/TopicsContainer.styled';
import Topic from './styled/Topic.styled';
import ProjectImg from './styled/ProjectImg.styled';
import data from '../feat-projects';

const FeatProjects = () => {
  return (
    <SectionContainer bg>
      <h4>Featured Projects</h4>
      <ArticleGrid>
        {data.map((project) => (
          <ArticleCard key={project.name}>
            <a href={project.netlify_url} target="_blank" rel="noreferrer">
              <ProjectImg props={project.image}>
                <div>
                  <h6>{project.name}</h6>
                </div>
              </ProjectImg>
            </a>
            <h5>{project.name}</h5>
            <Paragraph grid>{project.description}</Paragraph>
            <TopicsContainer><Topic>{project.topics}</Topic></TopicsContainer>
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

export default FeatProjects;