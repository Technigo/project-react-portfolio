/* eslint-disable no-const-assign */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper, List, Content } from './styles/Wrappers';
import { Tags } from './styles/Tags';
import { TagGithub } from './styles/TagGithub';
import projects from '../projects.json';

export const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);

  console.log('Projects', { projects });
  // fetch(projects)
  //   .then((reponse) => reponse.json())
  //   .then((prop) => {
  //     setRepos(prop);
  //   });

  const FeaturedRepos = projects.filter(
    (firstProjects) =>
      firstProjects.isFeatured === true ||
      firstProjects.isFeatured === true ||
      firstProjects.isFeatured === true ||
      firstProjects.isFeatured === true
  );

  const OtherRepos = showAll
    ? projects.filter((firstProjects) => firstProjects.isFeatured === false)
    : projects
        .filter((firstProjects) => firstProjects.isFeatured === false)
        .slice(0, 3);

  const handleShowAll = () => {
    // prettier-ignore
    setShowAll(!showAll);
  };

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
        <ShowMoreButton onClick={handleShowAll}>
          {showAll ? 'Show less' : 'Show more'}
        </ShowMoreButton>
      </InnerWrapper>
    </BlockSection>
  );
};

const ShowMoreButton = styled.button`
  border-radius: 4px;
  padding: 8px 16px;
  color: red;
  background: transparent;
  border: 1px solid red;
`;

const OtherContent = styled.div`
  margin: 50px 0;
`;

const RedBoldSpan = styled.span`
  color: #fa382f;
  text-transform: uppercase;
  font-weight: bold;
`;
