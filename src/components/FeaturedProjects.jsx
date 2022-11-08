import React from 'react';
import { SectionContainer, ArticleContainer, ProjectImage } from './styled/Containers.styled';
import { ProjectsGrid } from './styled/Grids.styled';
import Paragraph from './styled/Paragraph.styled';
import { Topic, TopicsContainer } from './styled/Topics.styled';
import data from '../feat-projects';

const FeaturedProjects = () => {
  return (
    <SectionContainer>
      <h4>Featured Projects</h4>
      <ProjectsGrid>
        {data.slice(0, 4).map((project) => (
          <ArticleContainer key={project.name}>
            <a href={project.netlify_url} target="_blank" rel="noreferrer">
              <ProjectImage style={{ backgroundImage: `url(${project.image})` }}>
                <div>
                  <h6>{project.name}</h6>
                </div>
              </ProjectImage>
            </a>
            {/* <h5>{project.project_name}</h5> */}
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