/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper, List, Content } from './styles/Wrappers';
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
      firstProjects.id === 'project-10' ||
      firstProjects.id === 'project-9' ||
      firstProjects.id === 'project-7' ||
      firstProjects.id === 'project-3'
  );

  const OtherRepos = projects.filter(
    (firstProjects) =>
      firstProjects.id === 'project-8' ||
      firstProjects.id === 'project-6' ||
      firstProjects.id === 'project-5' ||
      firstProjects.id === 'project-4' ||
      firstProjects.id === 'project-2' ||
      firstProjects.id === 'project-1'
  );

  return (
    <BlockSection>
      <InnerWrapper>
        <h3>Featured Projects</h3>
        <List>
          {FeaturedRepos.map((project) => (
            <Content key={project.id}>
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
              <Tags tags={project.tags} />
              <TagGithub tagGithub={project.githubLink} />
            </Content>
          ))}
        </List>
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
                  <RedBoldSpan> &gt;&gt;</RedBoldSpan>
                </p>
              </a>
            </div>
            <Tags tags={project.tags} />
            <TagGithub tagGithub={project.githubLink} />
          </OtherContent>
        ))}
      </InnerWrapper>
    </BlockSection>
  );
};

const OtherContent = styled.div`
  margin: 50px 0;
`;

const RedBoldSpan = styled.span`
  color: #fa382f;
  text-transform: uppercase;
  font-weight: bold;
`;
