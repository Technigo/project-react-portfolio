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
color: var(--darkChocolate);
padding-top: 50px;
font-size: 1.7rem;
`;

const ListDescription = styled(ProjectDescription)`
color: var(--mineShaft);;
font-size: 1.3rem;
font-weight: 500;
&:hover{
  color: var(--purpleHighlight);
}
`;