/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';
import { Tags } from './StyledComponents/Tags';
import projects from '../projects.json';

export const FeaturedProjects = () => {
  console.log('Projects', { projects });
  // fetch(projects)
  //   .then((reponse) => reponse.json())
  //   .then((prop) => {
  //     setRepos(prop);
  //   });

  const FeaturedRepos = projects.filter(
    (firstProjects) =>
      firstProjects.id === 'project-8' ||
      firstProjects.id === 'project-7' ||
      firstProjects.id === 'project-6' ||
      firstProjects.id === 'project-5'
  );

  const OtherRepos = projects.filter(
    (firstProjects) =>
      firstProjects.id === 'project-5' ||
      firstProjects.id === 'project-4' ||
      firstProjects.id === 'project-3' ||
      firstProjects.id === 'project-2'
  );

  return (
    <BlockSection>
      <InnerWrapper>
        <h3>Featured Projects</h3>

        {FeaturedRepos.map((project) => (
          <FeaturedContent key={project.id}>
            <img src={project.image} alt="project img" width="50%" />
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <a href={project.netlifyLink}>View it Live</a> <span>|</span>{' '}
            <a href={project.githubLink}>View on Github</a>
            <Tags tags={project.tags} />
          </FeaturedContent>
        ))}

        <h4>Other projects</h4>

        {OtherRepos.map((project) => (
          <OtherContent key={project.id}>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <a href={project.netlifyLink}>View it Live</a> <span>|</span>{' '}
            <a href={project.githubLink}>View on Github</a>
            <Tags tags={project.tags} />
          </OtherContent>
        ))}
      </InnerWrapper>
    </BlockSection>
  );
};

const FeaturedContent = styled.div`
  width: 50%;
  height: 50%;

  h5 {
    font-size: 1.3rem;
  }
`;

const OtherContent = styled.div`
  width: 50%;
  height: 50%;

  h5 {
    font-size: 1.3rem;
  }
`;
