/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './styles/Wrappers';
import { Tags } from './styles/Tags';
import { TagGithub } from './styles/TagGithub';
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
            <a
              href={project.netlifyLink}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
              aria-hidden>
              <img src={project.image} alt={project.title} width="100%" />
            </a>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <TagGithub tagGithub={project.githubLink} />
            <Tags tags={project.tags} />
          </FeaturedContent>
        ))}

        <h4>Other projects</h4>

        {OtherRepos.map((project) => (
          <OtherContent key={project.id}>
            <div>
              <a
                href={project.netlifyLink}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden>
                <h5>{project.title}</h5>
                <p>
                  {project.description}
                  <h5> &gt;&gt;</h5>
                </p>
              </a>
            </div>
            <TagGithub tagGithub={project.githubLink} />
            <Tags tags={project.tags} />
          </OtherContent>
        ))}
      </InnerWrapper>
    </BlockSection>
  );
};

const FeaturedContent = styled.div`
  margin: 50px 0;
`;

const OtherContent = styled.div`
  margin: 50px 0;
`;
