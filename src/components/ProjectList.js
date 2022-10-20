import React from 'react';
import { Section, SectionTitle, TextWrapper, Wrapper, Span } from 'components/Section';
import { ProjectDescription, ProjectTitle, Tag, TagContainer, Link } from 'components/Project';
import styled from 'styled-components'
import data from '../assets/projects.json'

const ProjectList = () => {
  return (
    <Section>
      <OtherSectionTitile>MORE PROJECTS</OtherSectionTitile>
      <Wrapper>
        {data.map((project) => (
          <OtherProjectsWrap key={project.title}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <Link
              href={project.github}
              alt="project landingpage"
              target="_blank"
              rel="noopener noreferrer">
              <ProjectDescription>{project.description} <Span>&gt;&gt;</Span></ProjectDescription>
            </Link>
            <TagContainer>
              {project.tools.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>
          </OtherProjectsWrap>
        ))}
      </Wrapper>
    </Section>
  )
};
export default ProjectList;

const OtherProjectsWrap = styled(TextWrapper)`
margin: 2px;
`;

const OtherSectionTitile = styled(SectionTitle)`
background: none;
color: grey;
`;