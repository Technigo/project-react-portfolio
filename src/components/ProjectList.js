import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, TextWrapper, Wrapper, Span } from 'components/Section';
import { ProjectDescription, ProjectTitle, Tag, TagContainer, Link } from 'components/Project';
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
              <ListDescription>{project.description} <Span>&gt;&gt;</Span></ListDescription>
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
color: #2B5A71;
padding-top: 50px;
font-size: 1.8rem;
&:hover{
  background: none;
  color: #7E4B48;
}
`;

const ListDescription = styled(ProjectDescription)`
color: #2B5A71;
font-size: 1.3rem;
font-weight: 500;
`;